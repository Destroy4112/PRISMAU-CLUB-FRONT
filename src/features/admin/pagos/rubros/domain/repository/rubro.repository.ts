import type { Filter } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { CreateRubroInput, UpdateRubroInput } from "../../application/contracts/rubro.input";
import type { Rubro, RubroId } from "../model/rubro.model";

export interface RubroRepository {
    getAll(params: PageParams & Filter): Promise<PaginatedResponse<Rubro>>;
    create(rubro: CreateRubroInput): Promise<ApiResponseVoid>;
    update(rubro: UpdateRubroInput): Promise<ApiResponseVoid>;
    delete(id: RubroId): Promise<ApiResponseVoid>;
}