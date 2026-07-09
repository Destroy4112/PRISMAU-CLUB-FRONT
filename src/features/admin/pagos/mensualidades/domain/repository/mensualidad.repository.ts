import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { PayMensualidadInput } from "../../application/contracts/mensualidad.input";
import type { Mensualidad } from "../models/mensualidad.model";

export interface MensualidadRepository {
    pay(payload: PayMensualidadInput): Promise<ApiResponseVoid>;
    get(documento: string, params: PageParams & FilterWithState): Promise<PaginatedResponse<Mensualidad>>;
}