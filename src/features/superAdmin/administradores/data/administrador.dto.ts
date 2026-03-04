import type { ICredenciales } from "@shared/constants/usuario/Usuario.model";
import type { AdministradorId } from "../domain/administrador.model";

export type AdministradorDTO = {
    id: AdministradorId;
    user_id?: number,
    Nombre: string,
    Apellidos: string,
    Correo: string,
    Telefono: string,
    user: ICredenciales,
    Estado: number,
    created_at?: string;
    updated_at?: string;
}

export interface AdministradorCreateDTO {
    Nombre: string;
    Apellidos: string;
    Correo: string;
    Telefono: string;
    user: ICredenciales;
}

export interface AdministradorUpdateDTO {
    id: AdministradorId;
    Nombre: string;
    Apellidos: string;
    Correo: string;
    Telefono: string;
    user: ICredenciales;
    Estado: number;
}