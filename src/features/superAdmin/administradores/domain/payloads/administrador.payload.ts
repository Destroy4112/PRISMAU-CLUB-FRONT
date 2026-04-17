import type { AdministradorId, Credenciales } from "../models/administrador.model";

export interface AdministradorPayload {
    id?: AdministradorId;
    userId?: number,
    nombre: string,
    apellidos: string,
    correo: string,
    telefono: string,
    user: Credenciales,
    estado?: number,
}