import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudFilter } from "./solicitud.filters";
import type { Solicitud, SolicitudRespuestaPayload } from "./solicitud.model";

export interface SolicitudRepository {
    getAll(params: PageParams & { filters?: SolicitudFilter }): Promise<PaginatedResponse<Solicitud>>;
    reply(payload: SolicitudRespuestaPayload): Promise<ApiResponseVoid>;
}