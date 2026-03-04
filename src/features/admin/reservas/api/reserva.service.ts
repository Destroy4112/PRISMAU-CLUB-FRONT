import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { IReserva } from "@models/entities/Entity.model";
import type { IFilterReserva } from "../types/reserva";
import type { PaginatedResponse } from "@models/response/Response.model";

const URL = ENDPOINTS.RESERVAS;

export async function getReservas(page = 1, limit = 30, filters: IFilterReserva = {}): Promise<PaginatedResponse<IReserva>> {
    const res = await http.get<PaginatedResponse<IReserva>>(URL, {
        params: { page, limit, ...filters },
    });
    return res.data;
};