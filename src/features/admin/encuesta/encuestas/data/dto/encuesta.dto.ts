import type { EncuestaId } from "../../domain/model/encuesta.model";

export type EncuestaDTO = {
   id: EncuestaId;
   Titulo: string;
   Descripcion: string;
   preguntas_count: number;
}

export interface EncuestaCreateDTO {
   Titulo: string;
   Descripcion: string;
}

export interface EncuestaUpdateDTO {
   id: EncuestaId;
   Titulo: string;
   Descripcion: string;
}