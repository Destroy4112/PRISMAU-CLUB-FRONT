import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Acceso } from "../models/acceso.model";

export interface AccesoRepository {
   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Acceso>>;
}