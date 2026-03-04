import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@models/response/Response.model";

const URL = ENDPOINTS.RESET_PASSWORD;

export async function sendResetCode(documento: string): Promise<ApiResponseVoid> {
    const res = await http.post<ApiResponseVoid>(URL, { Documento: documento });
    return res.data;
}