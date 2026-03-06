import type { ChangeEvent } from "react";
import type { AdministradorFilter } from "../../domain/administrador.filters";
import type { Administrador } from "../../domain/administrador.model";

export type AdminModalKey = "crearEditar" | "clave";

export type ColumnsAdminProps = {
    cargar: (admin: Administrador) => void,
    handleDelete: (id: number) => void,
    handleUpdateStatus: (id: number) => void
    cambiarClave: (id: number) => void
}

export const INITIAL_FILTERS_ADMIN: AdministradorFilter = {
    Nombre: "",
    Apellidos: ""
};

export type AdministradorForm = {
    Nombre: string;
    Apellidos: string;
    user: { id?: number, Documento: string, password?: string };
    Correo: string;
    Telefono: string;
};

export const ADMINISTRADOR_FORM_INITIAL: AdministradorForm = {
    Nombre: "",
    Apellidos: "",
    user: { id: undefined, Documento: "", password: "" },
    Correo: "",
    Telefono: "",
};

export type FormAdminProps = {
    isEditing: boolean,
    form: AdministradorForm,
    hanleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type AdministradorPasswordForm = {
    id: number | null;
    password: string;
};

export const ADMIN_PASSWORD_FORM_INITIAL: AdministradorPasswordForm = {
    id: null,
    password: "",
};
