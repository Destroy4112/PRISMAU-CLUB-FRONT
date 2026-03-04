import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid, PaginatedResponse } from "@models/response/Response.model";
import type { IEmpleado } from '@models/usuario/Usuario.model';
import type { EmpleadoImagen, FiltersEmpleado } from "../types/empleado";

const URL = ENDPOINTS.EMPLEADOS;

export async function createEmpleado(empleado: IEmpleado): Promise<ApiResponse<IEmpleado>> {
    try {
        const res = await http.post<ApiResponse<IEmpleado>>(URL, empleado);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function getEmpleados(page = 1, limit = 30, filters: FiltersEmpleado = {}): Promise<PaginatedResponse<IEmpleado>> {
    try {
        const res = await http.get<PaginatedResponse<IEmpleado>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function updateEmpleado(empleado: IEmpleado): Promise<ApiResponseVoid> {
    try {
        const res = await http.put<ApiResponseVoid>(`${URL}/${empleado.id}`, empleado);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function changeImagenEmpleado(id: EmpleadoImagen["id"], imagen: EmpleadoImagen["imagen"]): Promise<ApiResponseVoid> {
    try {
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${id}`, imagen);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteEmpleado(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export async function deleteImagenEmpleado(id: number): Promise<ApiResponseVoid> {
    try {
        const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
        return res.data;
    } catch (error) {
        throw error;
    }
};