import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Asociado } from "../../domain/model/asociado.model";
import { asociadoDomainToForm, asociadoFormToCreateInput, asociadoFormToUpdateInput } from "../mapper/asociado-form.mapper";
import { useCreateAsociadoMutation } from "../mutations/useCreateAsociadoMutation";
import { useUpdateAsociadoMutation } from "../mutations/useUpdateAsociadoMutation";
import { ASOCIADO_FORM_INITIAL, type AsociadoForm, type AsociadoModalKey } from "../types/asociado";

export function useAsociadoForm(modalApi: ModalsApi<AsociadoModalKey>) {

   const { toggleModal } = modalApi;

   const [asociadoForm, setAsociadoForm] = useState<AsociadoForm>(ASOCIADO_FORM_INITIAL);
   const [touched, setTouched] = useState<boolean>(false);
   const [editId, setEditId] = useState<number | null>(null);
   const isEditing = editId != null;

   const resetForm = (): void => {
      setTouched(false);
      setAsociadoForm(ASOCIADO_FORM_INITIAL);
      setEditId(null);
   };

   const openModal = (): void => {
      resetForm();
      toggleModal("crearEditar");
   };

   const closeModal = (): void => {
      toggleModal("crearEditar");
      resetForm();
   };

   const { mutate: createAsociadoMutation, isPending: isCreating } = useCreateAsociadoMutation({
      onOk: () => closeModal(),
   });

   const { mutate: updateAsociadoMutation, isPending: isUpdating } = useUpdateAsociadoMutation({
      onOk: () => closeModal(),
   });

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = target;
      setAsociadoForm((prev) => ({ ...prev, [name]: value }));
   };

   const cargar = (row: Asociado): void => {
      setEditId(row.id!);
      setAsociadoForm(asociadoDomainToForm(row));
      toggleModal("crearEditar");
   };

   const submit = (): void => {
      setTouched(true);
      if (isEditing && editId != null) {
         updateAsociadoMutation(asociadoFormToUpdateInput(asociadoForm, editId));
         return;
      }
      createAsociadoMutation(asociadoFormToCreateInput(asociadoForm));
   };

   return {
      asociadoForm,
      touched,
      loading: isCreating || isUpdating,
      tituloModal: isEditing ? "Editar Asociado" : "Crear Asociado",
      openModal,
      closeModal,
      cargar,
      handleChange,
      submit,
   };
}