export type EncuestaId = number;

export interface Encuesta {
   id: EncuestaId;
   titulo: string;
   descripcion: string;
   preguntas_count: number;
}