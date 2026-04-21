import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Pregunta, PreguntaId } from "../model/pregunta.model";
import type { PreguntaPayload } from "../payload/pregunta.payload";

export interface PreguntaRepository {
    getAll(id: number): Promise<Pregunta[]>;
    create(rubro: PreguntaPayload): Promise<ApiResponseVoid>;
    update(rubro: PreguntaPayload): Promise<ApiResponseVoid>;
    delete(id: PreguntaId): Promise<ApiResponseVoid>;
}