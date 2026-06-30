import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { CreateEspacioInput, UpdateEspacioInput } from "../../application/contracts/espacio.input";
import type { Espacio } from "../model/espacio.model";

export interface EspacioRepository {
    getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Espacio>>;
    create(payload: CreateEspacioInput): Promise<ApiResponseVoid>;
    update(payload: UpdateEspacioInput): Promise<ApiResponseVoid>;
    delete(id: number): Promise<ApiResponseVoid>;
}