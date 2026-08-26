import type { ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Encuesta } from "../../domain/model/encuesta.model";
import { encuestaDomainToForm, encuestaFormToPayload } from "../mapper/encuesta-form.mapper";
import { useCreateEncuestaMutation } from "../mutations/useCreateEncuestaMutation";
import { useUpdateEncuestaMutation } from "../mutations/useUpdateEncuestaMutation";
import { INITIAL_ENCUESTA_FORM, type EncuestaForm, type EncuestaModalKey } from "../types/encuesta";

export function useEncuestaForm(modalsApi: ModalsApi<EncuestaModalKey>) {

   const { toggleModal } = modalsApi;

   const [encuestaForm, setEncuestaForm] = useState<EncuestaForm>(INITIAL_ENCUESTA_FORM);
   const [editId, setEditId] = useState<number | null>(null);

   const isEditing = editId != null;

   const resetForm = (): void => {
      setEncuestaForm(INITIAL_ENCUESTA_FORM);
      setEditId(null);
   };

   const closeModal = (): void => {
      toggleModal("crearEditar");
      resetForm();
   };

   const openCreate = (): void => {
      resetForm();
      toggleModal("crearEditar");
   };

   const cargarEncuesta = (encuesta: Encuesta): void => {
      setEditId(encuesta.id);
      setEncuestaForm(encuestaDomainToForm(encuesta));
      toggleModal("crearEditar");
   };

   const { isPending: isCreating, mutate: createEncuestaMutation } = useCreateEncuestaMutation({
      onOk: closeModal,
   });

   const { isPending: isUpdating, mutate: updateEncuestaMutation } = useUpdateEncuestaMutation({
      onOk: closeModal,
   });

   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setEncuestaForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const submit = (): void => {
      if (isEditing) {
         updateEncuestaMutation(encuestaFormToPayload(encuestaForm, editId));
         return;
      }
      createEncuestaMutation(encuestaFormToPayload(encuestaForm));
   };

   return {
      encuestaForm,
      tituloModal: isEditing ? "Actualizar Encuesta" : "Crear Encuesta",
      loading: isCreating || isUpdating,
      openCreate,
      closeModal,
      cargarEncuesta,
      handleChange,
      submit
   };
}