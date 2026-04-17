import type { AdministradorId } from "../../domain/models/administrador.model";

type CredencialesDTO = {
    id?: number,
    Documento: string,
    password?: string,
    Rol?: number
}

export type AdministradorBase = {
    Nombre: string,
    Apellidos: string,
    Correo: string,
    Telefono: string,
    user: CredencialesDTO,
}

export type AdministradorDTO = AdministradorBase & {
    id: AdministradorId;
    user_id: number,
    Estado: number,
}

export type AdministradorCreateDTO = AdministradorBase;

export type AdministradorUpdateDTO = AdministradorBase & {
    id: AdministradorId;
    user_id: number,
    Estado: number,
}