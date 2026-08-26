import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CambiarInput } from "../../application/contracts/cambiar.input";

export interface CambiarRepository {
   changePassword(payload: CambiarInput): Promise<ApiResponseVoid>;
}