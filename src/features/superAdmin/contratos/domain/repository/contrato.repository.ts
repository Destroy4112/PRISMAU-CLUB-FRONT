import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { ContratoFilter } from "../models/contrato.filters";
import type { Contrato } from "../models/contrato.model";

export interface ContratoRepository {
    getAll(params: PageParams & { filters?: ContratoFilter }): Promise<PaginatedResponse<Contrato>>;
}