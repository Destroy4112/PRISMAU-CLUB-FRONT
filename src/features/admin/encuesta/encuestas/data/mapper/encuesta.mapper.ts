import type { Encuesta } from "../../domain/model/encuesta.model";
import type { EncuestaPayload } from "../../domain/payload/encuesta.payload";
import type { EncuestaCreateDTO, EncuestaDTO, EncuestaUpdateDTO } from "../dto/encuesta.dto";

export function encuestaDtoToDomain(dto: EncuestaDTO): Encuesta {
    return {
        id: dto.id,
        titulo: dto.Titulo,
        descripcion: dto.Descripcion,
        preguntas_count: dto.preguntas_count,
    };
}

export function payloadToCreateDto(payload: EncuestaPayload): EncuestaCreateDTO {
    return {
        Titulo: payload.titulo,
        Descripcion: payload.descripcion,
    };
}

export function payloadToUpdateDto(payload: EncuestaPayload): EncuestaUpdateDTO {
    return {
        id: payload.id!,
        Titulo: payload.titulo,
        Descripcion: payload.descripcion,
    };
}