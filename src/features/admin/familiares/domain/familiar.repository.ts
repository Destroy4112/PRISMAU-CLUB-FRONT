import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Familiar, FamiliarId, FamiliarImagenPayload, FamiliarPayload } from "./familiar.model";

export interface FamiliarRepository {
    getAll(id: FamiliarId, rol: string): Promise<Familiar[]>;
    create(payload: FamiliarPayload): Promise<ApiResponse<Familiar>>;
    updateImagen(payload: FamiliarImagenPayload): Promise<ApiResponseVoid>;
    update(payload: FamiliarPayload): Promise<ApiResponseVoid>;
    delete(id: FamiliarId): Promise<ApiResponseVoid>;
    deleteImagen(id: FamiliarId): Promise<ApiResponseVoid>;
}