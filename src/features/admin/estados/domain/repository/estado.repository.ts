import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Estado } from "../models/estado.model";

export interface EstadoRepository {
    getAll(params: PageParams & Filter): Promise<PaginatedResponse<Estado>>;
}