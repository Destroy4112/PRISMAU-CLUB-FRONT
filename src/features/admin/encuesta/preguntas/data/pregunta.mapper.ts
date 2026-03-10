import type { Pregunta, PreguntaPayload } from "../domain/pregunta.model";
import type { PreguntaCreateDTO, PreguntaDTO, PreguntaUpdateDTO } from "./pregunta.dto";

export function preguntaDtoToDomain(dto: PreguntaDTO): Pregunta {
    return {
        id: dto.id,
        encuesta_id: dto.encuesta_id,
        Pregunta: dto.Pregunta,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}

export function payloadToCreateDto(payload: PreguntaPayload): PreguntaCreateDTO {
    return {
        Pregunta: payload.Pregunta.trim(),
        encuesta_id: payload.encuesta_id,
    };
}

export function payloadToUpdateDto(payload: PreguntaPayload): PreguntaUpdateDTO {
    return {
        id: payload.id!,
        Pregunta: payload.Pregunta.trim(),
        encuesta_id: payload.encuesta_id,
    };
}