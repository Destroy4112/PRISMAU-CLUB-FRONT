import type { PreguntaId } from "../../domain/model/pregunta.model";

export interface PreguntaInput {
   id?: PreguntaId;
   encuestaId: number;
   pregunta: string;
}