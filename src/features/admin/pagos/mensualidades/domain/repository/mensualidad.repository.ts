import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { PayMensualidadInput } from "../../application/contracts/mensualidad.input";
import type { Mensualidad } from "../models/mensualidad.model";
import type { MensualidadStats, PagoMensualidadResponse } from "../models/mensualidad.response.model";

export interface MensualidadRepository {
   pay(payload: PayMensualidadInput): Promise<ApiResponse<PagoMensualidadResponse>>;
   get(documento: string, params: PageParams & FilterWithState): Promise<PaginatedResponse<Mensualidad, MensualidadStats>>;
}