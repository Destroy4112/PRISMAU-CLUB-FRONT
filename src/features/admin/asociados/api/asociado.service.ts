import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid, PaginatedResponse } from "@models/response/Response.model";
import type { IAsociado } from "@models/usuario/Usuario.model";
import type { AsociadoEstado, AsociadoImagen, FiltersAsociado } from "../types/asociado";

const URL = ENDPOINTS.ASOCIADOS;

export async function createAsociado(asociado: IAsociado): Promise<ApiResponse<IAsociado>> {
    try {
        const res = await http.post<ApiResponse<IAsociado>>(URL, asociado);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function getAsociados(page = 1, limit = 30, filters: FiltersAsociado = {}): Promise<PaginatedResponse<IAsociado>> {
    try {
        const res = await http.get<PaginatedResponse<IAsociado>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function getAllAsociados(): Promise<IAsociado[]> {
    try {
        const res = await http.get<IAsociado[]>(`${URL}/all`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateAsociado(asociado: IAsociado): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/${asociado.id}`, asociado);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function changeStatusAsociado(asociadoEstado: AsociadoEstado): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/status/${asociadoEstado.id}`, asociadoEstado);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function changeImagenAsociado(id: AsociadoImagen["id"], imagen: AsociadoImagen["imagen"]): Promise<ApiResponseVoid> {
    try {
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${id}`, imagen);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteAsociado(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteImagenAsociado(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};