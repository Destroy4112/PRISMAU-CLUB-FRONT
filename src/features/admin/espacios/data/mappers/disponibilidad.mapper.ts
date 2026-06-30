import type { SaveDisponibilidadInput } from "../../application/contracts/disponibilidad.input";
import type { Disponibilidad } from "../../domain/model/disponibilidad.model";
import type { DisponibilidadDTO, SaveDisponibilidadDTO } from "../dtos/disponibilidad.dto";

export function disponibilidadDtoToDomain(dto: DisponibilidadDTO): Disponibilidad {
    return {
        id: dto.id,
        espacioId: dto.espacio_id,
        dia: dto.Dia,
        inicio: dto.Inicio,
        fin: dto.Fin
    };
}

export function disponibilidadInputToDto(input: SaveDisponibilidadInput): SaveDisponibilidadDTO {
    return {
        espacio_id: input.espacioId,
        disponibilidades: input.disponibilidades.map(
            (item) => ({
                id: item.id,
                Dia: item.dia,
                Inicio: item.inicio,
                Fin: item.fin,
            }),
        ),
    }
}