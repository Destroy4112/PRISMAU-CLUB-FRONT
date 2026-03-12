import type { ModalsApi } from "@shared/hooks/useModal";
import { useState, type ChangeEvent } from "react";
import { menuFormToPayload } from "../../application/menu-form.mapper";
import type { Menu } from "../../domain/menu.model";
import { useCreateMenuMutation } from "../mutations/useCreateMenuMutation";
import { useUpdateMenuMutation } from "../mutations/useUpdateMenuMutation";
import { INITIAL_FORM_MENU, type MenuForm, type MenuModalKey } from "../types/menu";

export function useMenuForm(modalsApi: ModalsApi<MenuModalKey>) {

    const { toggleModal } = modalsApi;

    const [menuForm, setMenuForm] = useState<MenuForm>(INITIAL_FORM_MENU);
    const [editId, setEditId] = useState<number | null>(null);

    const isEditing = editId != null;

    const resetForm = (): void => {
        setMenuForm(INITIAL_FORM_MENU);
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
        setMenuForm(menu);
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