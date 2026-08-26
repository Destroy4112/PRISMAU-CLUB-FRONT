import type { Estado } from "../../domain/models/estado.model";
import type { EstadoDTO } from "../dto/estado.dto";

export function estadoDtoToDomain(dto: EstadoDTO): Estado {
   return {
      id: dto.id,
      usuario: dto.usuario,
      estado: dto.Estado,
      motivo: dto.Motivo,
      createdAt: dto.created_at
   };
}