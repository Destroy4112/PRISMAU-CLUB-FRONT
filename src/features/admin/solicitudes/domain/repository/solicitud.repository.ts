import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudRespuestaInput } from "../../application/contracts/solicitud.input";
import type { Solicitud } from "../models/solicitud.model";

export interface SolicitudRepository {
    getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Solicitud>>;
    reply(payload: SolicitudRespuestaInput): Promise<ApiResponseVoid>;
}