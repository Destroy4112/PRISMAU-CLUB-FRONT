export interface RespuestaEncuestaDTO {
    user_id: number;
    tipo_persona: string;
    persona_id: number;
    nombre: string;
    documento: string;
    correo: string;
    telefono: string;
    fecha_respuesta: string;
    respuestas: PreguntaRespuestaDTO[]
}

export interface PreguntaRespuestaDTO {
    pregunta_id: number;
    pregunta: string;
    respuesta_id: number;
    respuesta: string;
}