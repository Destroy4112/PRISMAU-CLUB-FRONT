import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudFilter } from "../models/solicitud.filters";
import type { Solicitud } from "../models/solicitud.model";
import type { SolicitudRespuestaPayload } from "../payloads/solicitud.payload";

export interface SolicitudRepository {
    getAll(params: PageParams & { filters?: SolicitudFilter }): Promise<PaginatedResponse<Solicitud>>;
    reply(payload: SolicitudRespuestaPayload): Promise<ApiResponseVoid>;
}