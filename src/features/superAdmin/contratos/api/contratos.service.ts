import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IContrato } from "@models/entities/Entity.model";
import type { PaginatedResponse } from "@models/response/Response.model";
import type { FiltersContrato } from "../types/contrato";

const URL = ENDPOINTS.CONTRATOS;

export async function getContratos(page = 1, limit = 30, filters: FiltersContrato = {}): Promise<PaginatedResponse<IContrato>> {
    try {
        const res = await http.get<PaginatedResponse<IContrato>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data || [];
    } catch (error) {
        throw error;
    }
};
