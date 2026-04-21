import type { Pregunta } from "../../domain/model/pregunta.model";
import type { PreguntaPayload } from "../../domain/payload/pregunta.payload";
import type { PreguntaCreateDTO, PreguntaDTO, PreguntaUpdateDTO } from "../dto/pregunta.dto";

export function preguntaDtoToDomain(dto: PreguntaDTO): Pregunta {
    return {
        id: dto.id,
        encuestaId: dto.encuesta_id,
        pregunta: dto.Pregunta,
    };
}

export function preguntaPayloadToCreateDto(payload: PreguntaPayload): PreguntaCreateDTO {
    return {
        Pregunta: payload.pregunta,
        encuesta_id: payload.encuestaId,
    };
}

export function preguntaPayloadToUpdateDto(payload: PreguntaPayload): PreguntaUpdateDTO {
    return {
        id: payload.id!,
        Pregunta: payload.pregunta,
        encuesta_id: payload.encuestaId,
    };
}