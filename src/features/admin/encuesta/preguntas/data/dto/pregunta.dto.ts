import type { PreguntaId } from "../../domain/model/pregunta.model";

type PreguntaBase = {
   encuesta_id: number;
   Pregunta: string;
}

export type PreguntaDTO = PreguntaBase & {
   id: PreguntaId;
}

export type PreguntaCreateDTO = PreguntaBase;

export type PreguntaUpdateDTO = PreguntaBase & {
   id: PreguntaId;
}