export type PreguntaId = number;

export interface Pregunta {
    id: PreguntaId;
    encuesta_id: number;
    Pregunta: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface PreguntaPayload {
    id?: PreguntaId;
    encuesta_id: number;
    Pregunta: string;
}