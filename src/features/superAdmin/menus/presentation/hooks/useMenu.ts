import useModals from "@shared/hooks/useModal";
import type { MenuModalKey } from "../types/menu";
import { useMenuActions } from "./useMenuActions";
import { useMenuForm } from "./useMenuForm";
import { useMenuList } from "./useMenuList";

export default function useMenu() {

    const modalsApi = useModals<MenuModalKey>();

    const list = useMenuList();
    const form = useMenuForm(modalsApi);
    const actions = useMenuActions();

    return {
        titulo: "Modulos",
        subtitulo: "Administración de módulos disponibles en la aplicación mobile",
        modals: modalsApi.modals,
        ...list,
        ...form,
        ...actions,
    };
}
