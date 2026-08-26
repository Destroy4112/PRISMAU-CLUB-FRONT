import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Espacio } from "../../domain/model/espacio.model";
import { espacioDomainToForm, espacioFormToCreateInput, espacioFormToUpdateInput } from "../mapper/espacio-form.mapper";
import { useCreateEspacioMutation } from "../mutations/useCreateEspacioMutation";
import { useUpdateEspacioMutation } from "../mutations/useUpdateEspacioMutation";
import { ESPACIO_FORM_INITIAL, type EspacioForm, type EspacioModalKey } from "../types/espacio";

export function useEspacioForm(modalApi: ModalsApi<EspacioModalKey>) {

   const { toggleModal } = modalApi;

   const [espacioForm, setEspacioForm] = useState<EspacioForm>(ESPACIO_FORM_INITIAL);
   const [touched, setTouched] = useState<boolean>(false);
   const [editId, setEditId] = useState<number | null>(null);
   const isEditing = editId != null;

   const resetForm = (): void => {
      setTouched(false);
      setEspacioForm(ESPACIO_FORM_INITIAL);
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

   const { mutate: createEspacioMutation, isPending: isCreating } = useCreateEspacioMutation({
      onOk: () => closeModal(),
   });

   const { mutate: updateEspacioMutation, isPending: isUpdating } = useUpdateEspacioMutation({
      onOk: () => closeModal(),
   });

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      const { name, value } = target;
      setEspacioForm((prev) => ({ ...prev, [name]: value }));
   };

   const handleChangeImagen = (e: ChangeEvent<HTMLInputElement>): void => {
      const file = e.target.files?.[0] ?? null;
      if (file == null) return;
      setEspacioForm((prev) => ({ ...prev, imagen: file, imagePreview: URL.createObjectURL(file) }));
   };

   const cargar = (row: Espacio): void => {
      setEditId(row.id!);
      setEspacioForm(espacioDomainToForm(row));
      toggleModal("crearEditar");
   };

   const submit = (): void => {
      setTouched(true);
      if (isEditing && editId != null) {
         updateEspacioMutation(espacioFormToUpdateInput(espacioForm, editId));
         return;
      }
      createEspacioMutation(espacioFormToCreateInput(espacioForm));
   };

   return {
      espacioForm,
      touched,
      loading: isCreating || isUpdating,
      tituloModal: isEditing ? "Editar Espacio" : "Crear Espacio",
      openModal,
      closeModal,
      cargar,
      handleChange,
      handleChangeImagen,
      submit,
   };
}