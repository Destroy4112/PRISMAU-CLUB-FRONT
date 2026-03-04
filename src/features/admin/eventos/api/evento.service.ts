import { http } from '@config/axiosConfig';
import { ENDPOINTS } from '@models/endpoints/Endpoints.model';
import type { IEvento } from '@models/entities/Entity.model';
import type { ApiResponse, ApiResponseVoid } from '@models/response/Response.model';

const URL = ENDPOINTS.EVENTOS;

export async function createEvento(noticia: IEvento): Promise<ApiResponse<IEvento>> {
    try {
        const res = await http.post<ApiResponse<IEvento>>(URL, noticia);
        return res.data
    } catch (error) {
        throw error;
    }
};

export async function getEventos(): Promise<IEvento[]> {
    try {
        const res = await http.get<IEvento[]>(URL);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateEvento(noticia: IEvento): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/${noticia.id}`, noticia);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteEvento(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};
