import type { PreguntaRespuesta, RespuestaEncuesta } from "../../domain/model/respuesta-encuesta.model";
import type { PreguntaRespuestaDTO, RespuestaEncuestaDTO } from "../dto/respuesta-encuesta.dto";

export function preguntaRespuestaDtoToDomain(dto: PreguntaRespuestaDTO[]): PreguntaRespuesta[] {
    return dto.map((pregunta) => ({
        preguntaId: pregunta.pregunta_id,
        pregunta: pregunta.pregunta,
        respuestaId: pregunta.respuesta_id,
        respuesta: pregunta.respuesta
    }))
}

export function respuestaEncuestaDtoToDomain(dto: RespuestaEncuestaDTO): RespuestaEncuesta {
    return {
        userId: dto.user_id,
        tipoPersona: dto.tipo_persona,
        personaId: dto.persona_id,
        nombre: dto.nombre,
        documento: dto.documento,
        correo: dto.correo,
        telefono: dto.telefono,
        fechaRespuesta: dto.fecha_respuesta,
        respuestas: preguntaRespuestaDtoToDomain(dto.respuestas)
    };
}