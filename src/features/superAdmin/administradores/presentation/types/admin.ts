import type { ChangeEvent } from "react";
import type { Administrador } from "../../domain/administrador.model";
import type { AdministradorForm } from "./administrador.form";

export type FormAdminProps = {
    isEditing: boolean,
    form: AdministradorForm,
    hanleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type ColumnsAdminProps = {
    cargar: (admin: Administrador) => void,
    handleDelete: (id: number) => void,
    handleUpdateStatus: (id: number) => void
    cambiarClave: (id: number) => void
}

export const INITIAL_FILTERS_ADMIN = {
    Nombre: "",
    Apellidos: ""
};