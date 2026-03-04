import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IEstado } from "@models/entities/Entity.model";
import type { PaginatedResponse } from "@models/response/Response.model";
import type { FiltersEstado } from "../types/estado";

const URL = ENDPOINTS.ESTADOS;

export async function getEstados(page = 1, limit = 30, filters: FiltersEstado = {}): Promise<PaginatedResponse<IEstado>> {
    try {
        const res = await http.get<PaginatedResponse<IEstado>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data || [];
    } catch (error) {
        throw error;
    }
};
