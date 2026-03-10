import type { Encuesta, EncuestaPayload } from "../domain/encuesta.model";
import type { EncuestaCreateDTO, EncuestaDTO, EncuestaUpdateDTO } from "./encuesta.dto";

export function encuestaDtoToDomain(dto: EncuestaDTO): Encuesta {
    return {
        id: dto.id,
        Titulo: dto.Titulo,
        Descripcion: dto.Descripcion,
        preguntas_count: dto.preguntas_count,
        Estado: dto.Estado,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}

export function payloadToCreateDto(payload: EncuestaPayload): EncuestaCreateDTO {
    return {
        Titulo: payload.Titulo.trim(),
        Descripcion: payload.Descripcion.trim(),
    };
}

export function payloadToUpdateDto(payload: EncuestaPayload): EncuestaUpdateDTO {
    return {
        id: payload.id!,
        Titulo: payload.Titulo.trim(),
        Descripcion: payload.Descripcion.trim(),
        Estado: payload.Estado!,
    };
}