import { type ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Administrador, AdministradorId } from "../../domain/models/administrador.model";
import { administradorDomainToForm, administradorFormToPayload } from "../mappers/administrador-form.mapper";
import { useCreateAdministradorMutation } from "../mutations/useCreateAdministradorMutation";
import { useUpdateAdministradorMutation } from "../mutations/useUpdateAdministradorMutation";
import { INITIAL_ADMINISTRADOR_FORM, type AdministradorForm, type AdminModalKey } from "../types/admin";

export function useAdministradorForm(modalApi: ModalsApi<AdminModalKey>) {

   const { toggleModal } = modalApi;

   const [adminForm, setAdminForm] = useState<AdministradorForm>(INITIAL_ADMINISTRADOR_FORM);
   const [editId, setEditId] = useState<AdministradorId | null>(null);
   const isEditing = editId != null;

   const resetForm = (): void => {
      setAdminForm(INITIAL_ADMINISTRADOR_FORM);
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

   const { mutate: createAdminMutation, isPending: isCreating } = useCreateAdministradorMutation({
      onOk: () => closeModal(),
   });

   const { mutate: updateAdminMutation, isPending: isUpdating } = useUpdateAdministradorMutation({
      onOk: () => closeModal(),
   });

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = target;

      if (name === "documento" || name === "password") {
         setAdminForm((prev) => ({ ...prev, user: { ...prev.user, [name]: value } }));
         return;
      }

      setAdminForm((prev) => ({ ...prev, [name]: value }));
   };

   const cargar = (row: Administrador): void => {
      setEditId(row.id!);
      setAdminForm(administradorDomainToForm(row));
      toggleModal("crearEditar");
   };

   const submit = (): void => {
      if (isEditing) {
         updateAdminMutation(administradorFormToPayload(adminForm, editId!));
         return;
      }
      createAdminMutation(administradorFormToPayload(adminForm));
   };

   return {
      admin: adminForm,
      isEditing,
      loading: isCreating || isUpdating,
      tituloModal: isEditing ? "Editar Administrador" : "Crear Administrador",
      openModal,
      closeModal,
      cargar,
      handleChange,
      submit,
   };
}