import type { PreguntaId } from "../domain/pregunta.model";

export type PreguntaDTO = {
    id: PreguntaId;
    encuesta_id: number;
    Pregunta: string;
    created_at?: string;
    updated_at?: string;
}

export interface PreguntaCreateDTO {
    Pregunta: string;
    encuesta_id: number;
}

export interface PreguntaUpdateDTO {
    id: PreguntaId;
    Pregunta: string;
    encuesta_id: number;
}
