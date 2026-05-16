import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorFilter } from "../../application/contracts/administrador.filters";
import type { AdministradorInput } from "../../application/contracts/administrador.input";
import type { Administrador, AdministradorId } from "../models/administrador.model";

export interface AdministradorRepository {
    getAll(params: PageParams & AdministradorFilter): Promise<PaginatedResponse<Administrador>>;
    create(payload: AdministradorInput): Promise<ApiResponseVoid>;
    update(payload: AdministradorInput): Promise<ApiResponseVoid>;
    updateStatus(id: AdministradorId): Promise<ApiResponseVoid>;
    delete(id: AdministradorId): Promise<ApiResponseVoid>;
}