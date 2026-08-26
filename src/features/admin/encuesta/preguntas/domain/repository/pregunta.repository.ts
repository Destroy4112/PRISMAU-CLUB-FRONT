import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { PreguntaInput } from "../../application/contracts/pregunta.input";
import type { Pregunta, PreguntaId } from "../model/pregunta.model";

export interface PreguntaRepository {
   getAll(id: number): Promise<Pregunta[]>;
   create(rubro: PreguntaInput): Promise<ApiResponseVoid>;
   update(rubro: PreguntaInput): Promise<ApiResponseVoid>;
   delete(id: PreguntaId): Promise<ApiResponseVoid>;
}