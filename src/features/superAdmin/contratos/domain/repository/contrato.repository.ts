import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Contrato } from "../models/contrato.model";

export interface ContratoRepository {
   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Contrato>>;
}