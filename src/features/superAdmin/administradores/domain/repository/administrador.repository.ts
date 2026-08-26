import type { Filter } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorInput } from "../../application/contracts/administrador.input";
import type { Administrador, AdministradorId } from "../models/administrador.model";

export interface AdministradorRepository {
   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Administrador>>;
   create(payload: AdministradorInput): Promise<ApiResponseVoid>;
   update(payload: AdministradorInput): Promise<ApiResponseVoid>;
   updateStatus(id: AdministradorId): Promise<ApiResponseVoid>;
   delete(id: AdministradorId): Promise<ApiResponseVoid>;
}