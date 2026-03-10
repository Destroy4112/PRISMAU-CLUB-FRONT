import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Pregunta, PreguntaId, PreguntaPayload } from "./pregunta.model";

export interface PreguntaRepository {
    getAll(id: number): Promise<Pregunta[]>;
    create(rubro: PreguntaPayload): Promise<ApiResponse<Pregunta>>;
    update(rubro: PreguntaPayload): Promise<ApiResponseVoid>;
    delete(id: PreguntaId): Promise<ApiResponseVoid>;
}