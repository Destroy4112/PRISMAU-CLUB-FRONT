import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { RubroFilter } from "./rubro.filters";
import type { Rubro, RubroId, RubroPayload } from "./rubro.model";

export interface RubroRepository {
    getAll(params: PageParams & { filters?: RubroFilter }): Promise<PaginatedResponse<Rubro>>;
    create(rubro: RubroPayload): Promise<ApiResponse<Rubro>>;
    update(rubro: RubroPayload): Promise<ApiResponseVoid>;
    delete(id: RubroId): Promise<ApiResponseVoid>;
}