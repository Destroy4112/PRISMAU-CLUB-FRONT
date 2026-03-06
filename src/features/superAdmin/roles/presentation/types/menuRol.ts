import { menuUseCases } from "@features/superAdmin/menus/application/menu.container";
import type { ChangeEvent, ReactNode } from "react";
import type { MenuRole } from "../../domain/menu-rol.model";
import type { ModalsApi } from "@shared/hooks/useModal";

export type MenuRolModalKey = "crear";

export type UseMenuRolFormProps = {
    modalsApi: ModalsApi<MenuRolModalKey>;
    rol: number;
};

export type MenuRolForm = {
    menu_id: number,
    role_id: number
}

export const INITIAL_FORM_MENU_ROL: MenuRolForm = {
    menu_id: 0,
    role_id: 0
}

export interface CardRol {
    id: number;
    descripcion: string,
    icono: ReactNode,
    color: {
        bg: string,
        icon: string
    }
}

export type CardsRolProps = {
    cargarRol: (rol: number) => void
};

export type HeaderAsignProps = {
    toggleModal: () => void
}

export type CardsMenuRolProps = {
    loading: boolean,
    menus: MenuRole[] | undefined,
    eliminar: (id: number) => void
};

export type FormMenuRolProps = {
    form: MenuRolForm,
    menus: Awaited<ReturnType<typeof menuUseCases.getAll>> | undefined,
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void
}