import type { ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import type { Menu } from "../../domain/model/menu.model";
import { menuDomainToForm, menuFormToPayload } from "../mapper/menu-form.mapper";
import { useCreateMenuMutation } from "../mutations/useCreateMenuMutation";
import { useUpdateMenuMutation } from "../mutations/useUpdateMenuMutation";
import { INITIAL_MENU_FORM, type MenuForm, type MenuModalKey } from "../types/menu";

export function useMenuForm(modalsApi: ModalsApi<MenuModalKey>) {

   const { toggleModal } = modalsApi;

   const [menuForm, setMenuForm] = useState<MenuForm>(INITIAL_MENU_FORM);
   const [editId, setEditId] = useState<number | null>(null);

   const isEditing = editId != null;

   const resetForm = (): void => {
      setMenuForm(INITIAL_MENU_FORM);
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

   const cargarMenu = (menu: Menu): void => {
      setEditId(menu.id);
      setMenuForm(menuDomainToForm(menu));
      toggleModal("crearEditar");
   };

   const { isPending: isCreating, mutate: createMenuMutation } = useCreateMenuMutation({
      onOk: closeModal,
   });

   const { isPending: isUpdating, mutate: updateMenuMutation } = useUpdateMenuMutation({
      onOk: closeModal,
   });

   const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
      setMenuForm((prev) => ({ ...prev, [target.name]: target.value }));
   };

   const submit = (): void => {
      if (isEditing) {
         updateMenuMutation(menuFormToPayload(menuForm, editId!));
         return;
      }
      createMenuMutation(menuFormToPayload(menuForm));
   };

   return {
      menuForm,
      tituloModal: isEditing ? "Actualizar Modulo" : "Crear Modulo",
      loading: isCreating || isUpdating,
      openCreate,
      closeModal,
      cargarMenu,
      handleChange,
      submit
   };
}