import type { ChangeEvent } from "react";
import type { Menu } from "../../domain/menu.model";

export type FormMenuProps = {
    form: MenuForm,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}

export type ColumnsMenuProps = {
    cargar: (menu: Menu) => void,
    eliminar: (id: number) => void,
}

export type MenuForm = {
    Name: string,
    Type: string,
    Route: string,
    Icon: string,
    Color: string,
}

export const INITIAL_FORM_MENU: MenuForm = {
    Name: "",
    Type: "",
    Route: "",
    Icon: "",
    Color: "",
}