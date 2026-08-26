import type { ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Option } from "../../domain/model/option.model";
import { optionDomainToForm, optionFormToPayload } from "../mapper/option-form.mapper";
import { useCreateOptionMutation } from "../mutations/useCreateOptionMutation";
import { useUpdateOptionMutation } from "../mutations/useUpdateOptionMutation";
import { buildOptionContext, INITIAL_FORM_PREGUNTA, type OptionForm, type OptionModalKey } from "../types/option";

export function useOptionForm(id: number, modalsApi: ModalsApi<OptionModalKey>) {

   const { toggleModal } = modalsApi;

   const [optionForm, setOptionForm] = useState<OptionForm>(INITIAL_FORM_PREGUNTA);
   const [editId, setEditId] = useState<number | null>(null);

   const isEditing = editId != null;

   const context = buildOptionContext(id);

   const resetForm = (): void => {
      setOptionForm(INITIAL_FORM_PREGUNTA);
      setEditId(null);
   };

   const closeModal = (): void => {
      toggleModal("crearEditar");
      resetForm();
   };

   const openModal = (): void => {
      toggleModal("crearEditar");
   };

   const cargarOption = (option: Option): void => {
      setEditId(option.id);
      setOptionForm(optionDomainToForm(option));
      toggleModal("crearEditar");
   };

   const { isPending: isCreating, mutate: createOptionMutation } = useCreateOptionMutation({
      onOk: closeModal,
   });

   const { isPending: isUpdating, mutate: updateOptionMutation } = useUpdateOptionMutation({
      onOk: closeModal,
   });

   const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setOptionForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   const submit = (): void => {
      if (isEditing) {
         updateOptionMutation(optionFormToPayload(optionForm, context, editId));
         return;
      }
      createOptionMutation(optionFormToPayload(optionForm, context));
   };

   return {
      optionForm,
      tituloModal: isEditing ? "Actualizar Option" : "Crear Option",
      loading: isCreating || isUpdating,
      openModal,
      closeModal,
      cargarOption,
      handleChange,
      submit
   };
}