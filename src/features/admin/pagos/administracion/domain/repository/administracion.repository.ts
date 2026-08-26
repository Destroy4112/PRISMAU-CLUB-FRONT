import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { UpdateSocioValueInput } from "../../application/contracts/socio.input";
import type { Socio } from "../models/socio.model";

export interface AdministracionRepository {
   getSocios(params: PageParams & FilterWithState): Promise<PaginatedResponse<Socio>>;
   updateSocioValue(socio: UpdateSocioValueInput): Promise<ApiResponseVoid>;
}