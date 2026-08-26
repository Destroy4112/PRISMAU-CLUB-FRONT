import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { VertificarInput } from "../../application/contracts/verificar.input";

export interface VerificarRepository {
   verifyCode(payload: VertificarInput): Promise<ApiResponseVoid>;
}