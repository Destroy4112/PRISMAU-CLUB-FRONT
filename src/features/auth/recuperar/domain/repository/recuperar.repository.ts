import type { ApiResponseVoid } from "@shared/constants/response/Response.model";

export interface RecuperarRepository {
   getUser(documento: string): Promise<ApiResponseVoid>;
}