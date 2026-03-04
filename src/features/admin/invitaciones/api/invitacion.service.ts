import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IInvitacion } from "@models/entities/Entity.model";
import type { PaginatedResponse } from "@models/response/Response.model";
import type { FiltersInvitacion } from "../types/invitacion";

const URL = ENDPOINTS.INVITACIONES;

export async function getInvitaciones(page = 1, limit = 30, filters: FiltersInvitacion = {}): Promise<PaginatedResponse<IInvitacion>> {
    try {
        const res = await http.get<PaginatedResponse<IInvitacion>>(URL, {
            params: { page, limit, ...filters },
        });
        return res.data || [];
    } catch (error) {
        throw error;
    }
};
