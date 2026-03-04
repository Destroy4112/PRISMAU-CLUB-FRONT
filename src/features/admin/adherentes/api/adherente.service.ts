import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid, PaginatedResponse } from "@models/response/Response.model";
import type { IAdherente } from "@models/usuario/Usuario.model";
import type { AdherenteEstado, AdherenteImagen, FiltersAdherente } from "../types/adherente";

const URL = ENDPOINTS.ADHERENTES;

export async function createAdherente(adherente: IAdherente): Promise<ApiResponse<IAdherente>> {
    try {
        const res = await http.post<ApiResponse<IAdherente>>(URL, adherente);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function getAdherentes(page = 1, limit = 30, filters: FiltersAdherente = {}): Promise<PaginatedResponse<IAdherente>> {
    try {
        const res = await http.get<PaginatedResponse<IAdherente>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateAdherente(adherente: IAdherente): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/${adherente.id}`, adherente);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function changeAdherenteToAsociado(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/asociado/${id}`, {});
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function changeStatusAdherente(asociadoEstado: AdherenteEstado): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/status/${asociadoEstado.id}`, asociadoEstado);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function changeImagenAdherente(id: AdherenteImagen["id"], imagen: AdherenteImagen["imagen"]): Promise<ApiResponseVoid> {
    try {
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${id}`, imagen);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteAdherente(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteImagenAdherente(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};