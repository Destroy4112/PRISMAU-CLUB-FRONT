import type { Acceso } from "../../domain/models/acceso.model";
import type { AccesoDTO } from "../dto/acceso.dto";

export function accesoDtoToDomain(dto: AccesoDTO): Acceso {
   return {
      id: dto.id,
      usuario: dto.usuario,
      createdAt: dto.created_at
   };
}