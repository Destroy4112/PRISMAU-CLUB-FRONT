import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { ContratoFilter } from "./contrato.filters";
import type { Contrato } from "./contrato.model";

export interface ContratoRepository {
    getAll(params: PageParams & { filters?: ContratoFilter }): Promise<PaginatedResponse<Contrato>>;
}