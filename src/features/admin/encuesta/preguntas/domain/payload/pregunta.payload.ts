import type { PreguntaId } from "../model/pregunta.model";

export interface PreguntaPayload {
    id?: PreguntaId;
    encuestaId: number;
    pregunta: string;
}