import type { menuUseCases } from "@features/superAdmin/menus/application/container/menu.container";
import type { ModalsApi } from "@shared/hooks/useModal";
import type { ChangeEvent, ReactNode } from "react";
import type { MenuRole } from "../../domain/model/menu-role.model";

export type MenuRolModalKey = "crear";

export type UseMenuRolFormProps = {
   modalsApi: ModalsApi<MenuRolModalKey>;
   rol: number;
};

export type MenuRolForm = {
   menuId: number | null,
}

export const INITIAL_MENU_ROL_FORM: MenuRolForm = {
   menuId: null,
}

export type MenuRolContext = {
   roleId: number
}

export const buildMenuRolContext = (rol: number): MenuRolContext => ({ roleId: rol });

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