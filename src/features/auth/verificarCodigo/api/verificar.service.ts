import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@models/response/Response.model";
import type { IVerifyReset } from "../types/verificarCodigo";

const URL = ENDPOINTS.VERIFY_CODE;

export async function validateCodeReset(data: IVerifyReset): Promise<ApiResponseVoid> {
    const res = await http.post<ApiResponseVoid>(URL, data);
    return res.data;
}2