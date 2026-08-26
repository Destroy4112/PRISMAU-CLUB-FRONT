import type { EncuestaId } from "../../domain/model/encuesta.model";

export interface EncuestaInput {
   id?: EncuestaId;
   titulo: string;
   descripcion: string;
}