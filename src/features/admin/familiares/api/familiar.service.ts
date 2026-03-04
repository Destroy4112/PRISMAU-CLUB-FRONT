import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid } from "@models/response/Response.model";
import type { IFamiliar } from "@models/usuario/Usuario.model";
import type { IFamiliarLogo } from "../types/familiar";

const URL = ENDPOINTS.FAMILIARES;

export async function createFamiliar(familiar: IFamiliar): Promise<ApiResponse<IFamiliar>> {
    try {
        const res = await http.post<ApiResponse<IFamiliar>>(URL, familiar);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function getFamiliares(id: number, rol: string): Promise<IFamiliar[]> {
    try {
        const res = await http.get<IFamiliar[]>(`${URL}/${id}/${rol}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateFamiliar(familiar: IFamiliar): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/${familiar.id}`, familiar);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateImageFamiliar(id: IFamiliarLogo["id"], imagen: IFamiliarLogo["imagen"]): Promise<ApiResponseVoid> {
    try {
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${id}`, imagen);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteFamiliar(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteImagenFamiliar(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};