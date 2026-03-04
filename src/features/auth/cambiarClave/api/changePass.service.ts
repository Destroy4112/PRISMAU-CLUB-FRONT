import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@models/response/Response.model";
import type { IPasswordReset } from "../types/cambiarClave";

const URL = ENDPOINTS.CHANGE_PASSWORD;

export async function changePassword(data: IPasswordReset): Promise<ApiResponseVoid> {
    const res = await http.post<ApiResponseVoid>(URL, data);
    return res.data;
}