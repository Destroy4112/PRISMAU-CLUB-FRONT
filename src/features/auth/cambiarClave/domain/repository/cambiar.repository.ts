import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CambiarPayload } from "../payload/cambiar.payload";

export interface CambiarRepository {
    changePassword(payload: CambiarPayload): Promise<ApiResponseVoid>;
}