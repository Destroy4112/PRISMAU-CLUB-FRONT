import useModals from '@shared/hooks/useModal';
import { alertConfirm } from '@shared/utilities/alerts/alertas.utility';
import { useState, type ChangeEvent } from 'react';
import { useCreateMenuRolMutation } from '../mutations/useCreateMenuRolMutation';
import { useDeleteMenuRolMutation } from '../mutations/useDeleteMenuRolMutation';
import { useMenuRolQuery } from '../queries/useMenuRolQuery';
import { INITIAL_FORM_MENU_ROL, type MenuRolForm } from '../types/menuRol';
import { useMenuQuery } from '../queries/useMenuQuery';
export default function useMenuRol() {

    const { modals, toggleModal } = useModals();

    const [rol, setRol] = useState<number>(0);
    const [menuRolForm, setMenuRolForm] = useState<MenuRolForm>(INITIAL_FORM_MENU_ROL);

    //------------------ RECARGAR -----------------------------------------------

    const recargar = (): void => {
        setMenuRolForm(INITIAL_FORM_MENU_ROL);
    }

    const switchModal = (): void => {
        toggleModal("crear");
        recargar();
    };

    //--------------- CONSULTAR MENUS ---------------------------------------------

    const { data: menus, isLoading: isLoadingMenus } = useMenuQuery();

    //--------------- CONSULTAR ---------------------------------------------------

    const { data: menusRol, isLoading } = useMenuRolQuery(rol);

    const cargarRol = (rol: number): void => {
        setRol(rol);
    }

    //--------------- ASIGNAR MENU A ROL ------------------------------------------

    const { mutate: asignMenuMutation, isPending: isCreating } = useCreateMenuRolMutation({
        onOk: () => switchModal()
    });

    const handleChange = ({ target }: ChangeEvent<HTMLSelectElement>): void => {
        setMenuRolForm((prev) => ({
            ...prev,
            role_id: Number(rol),
            [target.name]: Number(target.value),
        }));
    }

    const handleSubmit = (): void => {
        asignMenuMutation(menuRolForm);
    }

    //--------------- ELIMINAR MENU A ROL ------------------------------------------

    const { mutate: eliminarMenuMutation } = useDeleteMenuRolMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este menu de rol?", "Si, eliminar!")) {
            eliminarMenuMutation(id)
        }
    }

    return {
        titulo: "Roles",
        subtitulo: "Gestión de menús asignados a roles",
        tituloModal: "Asignar menu a rol",
        modals,
        menus,
        isLoadingMenus,
        menusRol,
        isLoading,
        isCreating,
        menuRolForm,
        rol,
        cargarRol,
        toggleModal: switchModal,
        handleChange,
        handleSubmit,
        handleDelete,
    }
}