import type { Reserva } from "../../domain/model/reserva.model";
import type { ReservaDTO } from "../dto/reserva.dto";

export function reservaDtoToDomain(dto: ReservaDTO): Reserva {
   return {
      id: dto.id,
      userId: dto.user_id,
      espacioId: dto.espacio_id,
      fecha: dto.Fecha,
      inicio: dto.Inicio,
      fin: dto.Fin,
      usuario: dto.usuario,
      espacio: dto.espacio,
      createdAt: dto.created_at,
   };
}