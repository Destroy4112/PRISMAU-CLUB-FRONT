import { useCallback, useState, type ChangeEvent } from "react";
import { menuRolFormToPayload } from "../mapper/menu-rol-form.mapper";
import { useCreateMenuRolMutation } from "../mutations/useCreateMenuRolMutation";
import { buildMenuRolContext, INITIAL_MENU_ROL_FORM, type MenuRolForm, type UseMenuRolFormProps } from "../types/menuRol";

export function useMenuRolForm({ modalsApi, rol }: UseMenuRolFormProps) {

   const { toggleModal } = modalsApi;

   const [menuRolForm, setMenuRolForm] = useState<MenuRolForm>(INITIAL_MENU_ROL_FORM);

   const context = buildMenuRolContext(rol);

   const resetForm = useCallback((): void => {
      setMenuRolForm(INITIAL_MENU_ROL_FORM);
   }, []);

   const closeModal = useCallback((): void => {
      toggleModal("crear");
      resetForm();
   }, [toggleModal, resetForm]);

   const openModal = useCallback((): void => {
      toggleModal("crear");
      resetForm();
   }, [toggleModal, resetForm]);

   const { mutate: asignMenuMutation, isPending: isCreating } = useCreateMenuRolMutation({
      onOk: () => closeModal(),
   });

   const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
      setMenuRolForm((prev) => ({ ...prev, [target.name]: Number(target.value) }));
   };

   const handleSubmit = (): void => {
      const payload = menuRolFormToPayload(menuRolForm, context);
      asignMenuMutation(payload);
   };

   return {
      menuRolForm,
      isCreating,
      openModal,
      closeModal,
      handleChange,
      handleSubmit,
   };
}