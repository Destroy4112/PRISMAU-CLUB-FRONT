import type { ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Pregunta } from "../../domain/model/pregunta.model";
import { preguntaDomainToForm, preguntaFormToPayload } from "../mapper/pregunta-form.mapper";
import { useCreatePreguntaMutation } from "../mutations/useCreatePreguntaMutation";
import { useUpdatePreguntaMutation } from "../mutations/useUpdatePreguntaMutation";
import { buildPreguntaContext, INITIAL_FORM_PREGUNTA, type PreguntaForm, type PreguntaModalKey } from "../types/pregunta";

export function usePreguntaForm(id: number, modalsApi: ModalsApi<PreguntaModalKey>) {

   const { toggleModal } = modalsApi;

   const [preguntaForm, setPreguntaForm] = useState<PreguntaForm>(INITIAL_FORM_PREGUNTA);
   const [editId, setEditId] = useState<number | null>(null);

   const isEditing = editId != null;

   const context = buildPreguntaContext(id);

   const resetForm = (): void => {
      setPreguntaForm(INITIAL_FORM_PREGUNTA);
      setEditId(null);
   };

   const closeModal = (): void => {
      toggleModal("crearEditar");
      resetForm();
   };

   const openModal = (): void => {
      toggleModal("crearEditar");
   };

   const cargarPregunta = (pregunta: Pregunta): void => {
      setEditId(pregunta.id);
      setPreguntaForm(preguntaDomainToForm(pregunta));
      toggleModal("crearEditar");
   };

   const { isPending: isCreating, mutate: createPreguntaMutation } = useCreatePreguntaMutation({
      onOk: closeModal,
   });

   const { isPending: isUpdating, mutate: updatePreguntaMutation } = useUpdatePreguntaMutation({
      onOk: closeModal,
   });

   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setPreguntaForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const submit = (): void => {
      if (isEditing) {
         updatePreguntaMutation(preguntaFormToPayload(preguntaForm, context, editId));
         return;
      }
      createPreguntaMutation(preguntaFormToPayload(preguntaForm, context));
   };

   return {
      preguntaForm,
      tituloModal: isEditing ? "Actualizar Pregunta" : "Crear Pregunta",
      loading: isCreating || isUpdating,
      openModal,
      closeModal,
      cargarPregunta,
      handleChange,
      submit
   };
}