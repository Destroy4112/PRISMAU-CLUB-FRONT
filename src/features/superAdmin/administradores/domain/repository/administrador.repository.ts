import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorFilter } from "../models/administrador.filters";
import type { Administrador, AdministradorId } from "../models/administrador.model";
import type { AdministradorPayload } from "../payloads/administrador.payload";

export interface AdministradorRepository {
    getAll(params: PageParams & { filters?: AdministradorFilter }): Promise<PaginatedResponse<Administrador>>;
    create(payload: AdministradorPayload): Promise<ApiResponseVoid>;
    update(payload: AdministradorPayload): Promise<ApiResponseVoid>;
    updateStatus(id: AdministradorId): Promise<ApiResponseVoid>;
    delete(id: AdministradorId): Promise<ApiResponseVoid>;
}