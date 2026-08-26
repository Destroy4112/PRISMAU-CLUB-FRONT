import type { RespuestaEncuesta } from "../model/respuesta-encuesta.model";

export interface RespuestaEncuestaRepository {
   getAll(id: number): Promise<RespuestaEncuesta[]>;
}