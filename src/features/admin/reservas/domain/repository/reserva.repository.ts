import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { ReservaFilter } from "../model/reserva.filters";
import type { Reserva } from "../model/reserva.model";

export interface ReservaRepository {
    getAll(params: PageParams & { filters?: ReservaFilter }): Promise<PaginatedResponse<Reserva>>;
}