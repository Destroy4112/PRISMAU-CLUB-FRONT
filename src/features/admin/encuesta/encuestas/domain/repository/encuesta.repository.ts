import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Encuesta, EncuestaId } from "../model/encuesta.model";
import type { EncuestaPayload } from "../payload/encuesta.payload";

export interface EncuestaRepository {
    getAll(): Promise<Encuesta[]>;
    create(rubro: EncuestaPayload): Promise<ApiResponseVoid>;
    update(rubro: EncuestaPayload): Promise<ApiResponseVoid>;
    delete(id: EncuestaId): Promise<ApiResponseVoid>;
}