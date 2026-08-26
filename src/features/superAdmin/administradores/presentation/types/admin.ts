import type { ChangeEvent } from "react";
import type { Administrador } from "../../domain/models/administrador.model";

export type AdminModalKey = "crearEditar" | "clave";

export type ColumnsAdminProps = {
   cargar: (admin: Administrador) => void,
   handleDelete: (id: number) => void,
   handleUpdateStatus: (id: number) => void
   cambiarClave: (id: number) => void
}

export type AdministradorForm = {
   nombre: string;
   apellidos: string;
   user: { id?: number, documento: string, password?: string };
   correo: string;
   telefono: string;
};

export const INITIAL_ADMINISTRADOR_FORM: AdministradorForm = {
   nombre: "",
   apellidos: "",
   user: { id: undefined, documento: "", password: "" },
   correo: "",
   telefono: "",
};

export type FormAdminProps = {
   isEditing: boolean,
   form: AdministradorForm,
   hanleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type AdministradorPasswordForm = {
   id: number;
   password: string;
};

export const ADMIN_PASSWORD_FORM_INITIAL: AdministradorPasswordForm = {
   id: 0,
   password: "",
};

export type AdministradorExport = {
   Nombre: string;
   Usuario: string;
   Email: string;
   Telefono: string;
};