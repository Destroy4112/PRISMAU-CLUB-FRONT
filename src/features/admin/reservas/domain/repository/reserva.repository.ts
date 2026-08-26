import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Reserva } from "../model/reserva.model";

export interface ReservaRepository {
   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Reserva>>;
}