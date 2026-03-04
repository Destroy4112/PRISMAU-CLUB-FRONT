import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IEspacio } from "@models/entities/Entity.model";
import type { ApiResponse, ApiResponseVoid, PaginatedResponse } from "@models/response/Response.model";
import type { EspacioImagen, FilterEspacio } from "../types/espacio";

const URL = ENDPOINTS.ESPACIOS;

export async function createEspacio(espacio: IEspacio): Promise<ApiResponse<IEspacio>> {
    try {
        const res = await http.post<ApiResponse<IEspacio>>(URL, espacio);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function getEspacios(page = 1, limit = 30, filters: FilterEspacio = {}): Promise<PaginatedResponse<IEspacio>> {
    try {
        const res = await http.get<PaginatedResponse<IEspacio>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateEspacio(espacio: IEspacio): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/${espacio.id}`, espacio);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function changeImagenEspacio(id: EspacioImagen["id"], imagen: EspacioImagen["imagen"]): Promise<ApiResponseVoid> {
    try {
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${id}`, imagen);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteEspacio(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};