import { useCallback, useState, type ChangeEvent } from "react";
import { useCreateMenuRolMutation } from "../mutations/useCreateMenuRolMutation";
import { INITIAL_FORM_MENU_ROL, type MenuRolForm, type UseMenuRolFormProps } from "../types/menuRol";

export function useMenuRolForm({ modalsApi, rol }: UseMenuRolFormProps) {

    const { toggleModal } = modalsApi;

    const [menuRolForm, setMenuRolForm] = useState<MenuRolForm>(INITIAL_FORM_MENU_ROL);

    const resetForm = useCallback((): void => {
        setMenuRolForm(INITIAL_FORM_MENU_ROL);
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
        setMenuRolForm((prev) => ({ ...prev, role_id: Number(rol), [target.name]: Number(target.value) }));
    };

    const handleSubmit = (): void => {
        asignMenuMutation(menuRolForm);
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