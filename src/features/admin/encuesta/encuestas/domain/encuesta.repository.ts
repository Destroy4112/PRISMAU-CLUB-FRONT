import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Encuesta, EncuestaId, EncuestaPayload } from "./encuesta.model";

export interface EncuestaRepository {
    getAll(): Promise<Encuesta[]>;
    create(rubro: EncuestaPayload): Promise<ApiResponse<Encuesta>>;
    update(rubro: EncuestaPayload): Promise<ApiResponseVoid>;
    delete(id: EncuestaId): Promise<ApiResponseVoid>;
}