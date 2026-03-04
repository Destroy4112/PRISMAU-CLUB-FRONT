import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IAcceso } from "@models/entities/Entity.model";
import type { PaginatedResponse } from "@models/response/Response.model";
import type { FiltersAcceso } from "../types/acceso";

const URL = ENDPOINTS.ACCESOS;

export async function getAccesos(page = 1, limit = 30, filters: FiltersAcceso = {}): Promise<PaginatedResponse<IAcceso>> {
    try {
        const res = await http.get<PaginatedResponse<IAcceso>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data || [];
    } catch (error) {
        throw error;
    }
};
