import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { VerificarPayload } from "../payload/verificar.payload";

export interface VerificarRepository {
    verifyCode(payload: VerificarPayload): Promise<ApiResponseVoid>;
}