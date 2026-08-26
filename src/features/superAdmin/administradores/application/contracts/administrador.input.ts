import type { Credenciales } from "../../domain/models/administrador.model";

export interface AdministradorInput {
   id?: number;
   userId?: number,
   nombre: string,
   apellidos: string,
   correo: string,
   telefono: string,
   user: Credenciales,
   estado?: number,
}