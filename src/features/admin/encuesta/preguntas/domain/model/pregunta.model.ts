export type PreguntaId = number;

export interface Pregunta {
   id: PreguntaId;
   encuestaId: number;
   pregunta: string;
}