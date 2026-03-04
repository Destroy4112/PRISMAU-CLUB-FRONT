import useModals from "@shared/hooks/useModal";
import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useState, type ChangeEvent } from "react";
import type { Menu } from "../../domain/menu.model";
import { useCreateMenuMutation } from "../mutations/useCreateMenuMutation";
import { useDeleteMenuMutation } from "../mutations/useDeleteMenuMutation";
import { useUpdateMenuMutation } from "../mutations/useUpdateMenuMutation";
import { useMenuQuery } from "../queries/useMenuQuery";
import { INITIAL_FORM_MENU, type MenuForm } from "../types/menu";

export default function useMenu() {

    const { modals, toggleModal } = useModals();

    const [menuForm, setMenuForm] = useState<MenuForm>(INITIAL_FORM_MENU);
    const [editId, setEditId] = useState<number | null>(null);

    //--------------- RECARGAR ---------------------------------------------------

    const isEditing = editId != null;

    const recargar = (): void => {
        setMenuForm(INITIAL_FORM_MENU);
    };

    const switchModal = (): void => {
        toggleModal("crearEditar");
        recargar();
    };

    //--------------- CONSULTAR ---------------------------------------------------

    const { data: menus, isLoading } = useMenuQuery();

    //--------------- CREAR -------------------------------------------------------

    const { isPending: isCreating, mutate: createMenuMutation } = useCreateMenuMutation({
        onOk: () => switchModal()
    });

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        setMenuForm({ ...menuForm, [target.name]: target.value });
    };

    const handleSubmit = (): void => {
        createMenuMutation(menuForm);
    };

    //--------------- ACTUALIZAR --------------------------------------------------

    const { isPending: isUpdating, mutate: actualizarMutation } = useUpdateMenuMutation({
        onOk: () => switchModal()
    });

    const cargarMenu = (menu: Menu): void => {
        setEditId(menu.id);
        setMenuForm(menu);
        toggleModal("crearEditar");
    };

    const handleUpdate = (): void => {
        actualizarMutation({ id: editId!, ...menuForm })
    };

    //--------------- ELIMINAR ----------------------------------------------------

    const { mutate: eliminarMenuMutation } = useDeleteMenuMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este menu?", "Si, eliminar!")) {
            eliminarMenuMutation(id);
        }
    };

    return {
        titulo: "Modulos",
        subtitulo: "Administración de módulos disponibles en la aplicación mobile",
        tituloModal: isEditing ? "Actualizar Modulo" : "Crear Modulo",
        menuForm,
        modals,
        menus,
        isLoading,
        loading: isCreating || isUpdating,
        toggleModal: switchModal,
        handleChange,
        handler: isEditing ? handleUpdate : handleSubmit,
        cargarMenu,
        handleDelete
    };
}
