import type { Reserva } from "../domain/reserva.model";
import type { ReservaDTO } from "./reserva.dto";

export function reservaDtoToDomain(dto: ReservaDTO): Reserva {
    return {
        id: dto.id,
        user_id: dto.user_id,
        espacio_id: dto.espacio_id,
        Fecha: dto.Fecha,
        Inicio: dto.Inicio,
        Fin: dto.Fin,
        usuario: dto.usuario,
        espacio: dto.espacio,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}