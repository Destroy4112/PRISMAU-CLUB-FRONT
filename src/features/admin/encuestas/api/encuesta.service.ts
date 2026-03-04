import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IEncuesta } from "@models/entities/Entity.model";
import type { ApiResponse, ApiResponseVoid } from "@models/response/Response.model";

const URL = ENDPOINTS.ENCUESTAS;

export async function createEncuesta(data: IEncuesta): Promise<ApiResponse<IEncuesta>> {
    try {
        const res = await http.post<ApiResponse<IEncuesta>>(URL, data);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export async function getEncuestas(): Promise<IEncuesta[]> {
    try {
        const res = await http.get<IEncuesta[]>(URL);
        return res.data;
    } catch (error) {
        throw error;
    }
}

export async function updateEncuesta(data: IEncuesta): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/${data.id}`, data);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteEncuesta(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};