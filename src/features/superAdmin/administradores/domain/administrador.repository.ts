import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorFilter } from "./administrador.filters";
import type { Administrador, AdministradorId, AdministradorPayload } from "./administrador.model";

export interface AdministradorRepository {
    getAll(params: PageParams & { filters?: AdministradorFilter }): Promise<PaginatedResponse<Administrador>>;
    create(rubro: AdministradorPayload): Promise<ApiResponse<Administrador>>;
    update(rubro: AdministradorPayload): Promise<ApiResponseVoid>;
    updateStatus(id: AdministradorId): Promise<ApiResponseVoid>;
    delete(id: AdministradorId): Promise<ApiResponseVoid>;
}