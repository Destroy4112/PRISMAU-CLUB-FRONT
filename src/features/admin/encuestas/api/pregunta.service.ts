import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IPregunta } from "@models/entities/Entity.model";
import type { ApiResponse, ApiResponseVoid } from "@models/response/Response.model";

const URL = ENDPOINTS.PREGUNTAS;

export async function createPregunta(data: IPregunta): Promise<ApiResponse<IPregunta>> {
    const res = await http.post<ApiResponse<IPregunta>>(URL, data);
    return res.data;
}

export async function getPreguntas(id: number): Promise<IPregunta[]> {
    const res = await http.get<IPregunta[]>(`${URL}/encuesta/${id}`);
    return res.data;
};

export async function updatePregunta(data: IPregunta): Promise<ApiResponseVoid> {
    const res = await http.put(`${URL}/${data.id}`, data);
    return res.data;
};

export async function deletePregunta(id: number): Promise<ApiResponseVoid> {
    const res = await http.delete(`${URL}/${id}`);
    return res.data;
};