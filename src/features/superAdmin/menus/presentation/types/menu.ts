import type { ChangeEvent } from "react";
import type { Menu } from "../../domain/model/menu.model";

export type MenuModalKey = "crearEditar";

export type FormMenuProps = {
    form: MenuForm,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export type ColumnsMenuProps = {
    cargar: (menu: Menu) => void,
    eliminar: (id: number) => void,
}

export type MenuForm = {
    name: string,
    type: string,
    route: string,
    icon: string,
    color: string,
}

export const INITIAL_MENU_FORM: MenuForm = {
    name: "",
    type: "",
    route: "",
    icon: "",
    color: "",
}