export interface RespuestaEncuesta {
    userId: number;
    tipoPersona: string;
    personaId: number;
    nombre: string;
    documento: string;
    correo: string;
    telefono: string;
    fechaRespuesta: string;
    respuestas: PreguntaRespuesta[]
}

export interface PreguntaRespuesta {
    preguntaId: number;
    pregunta: string;
    respuestaId: number;
    respuesta: string;
}