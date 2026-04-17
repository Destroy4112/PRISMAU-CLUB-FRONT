import type { EncuestaId } from "../model/encuesta.model";

export interface EncuestaPayload {
    id?: EncuestaId;
    titulo: string;
    descripcion: string;
}