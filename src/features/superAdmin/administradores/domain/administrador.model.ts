import type { ICredenciales } from "@shared/constants/usuario/Usuario.model";

export type AdministradorId = number;

export interface Administrador {
    id: AdministradorId;
    user_id?: number,
    Nombre: string,
    Apellidos: string,
    Correo: string,
    Telefono: string,
    user: ICredenciales,
    Estado: number,
    createdAt?: string;
    updatedAt?: string;
}

export interface AdministradorPayload {
    id?: AdministradorId;
    user_id?: number,
    Nombre: string,
    Apellidos: string,
    Correo: string,
    Telefono: string,
    user: ICredenciales,
    Estado?: number,
}

export interface AdministradorPasswordPayload {
    id: AdministradorId,
    password: string
}