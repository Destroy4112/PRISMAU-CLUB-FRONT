import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudFilter } from "../domain/solicitud.filters";
import type { Solicitud, SolicitudRespuestaPayload } from "../domain/solicitud.model";
import type { SolicitudRepository } from "../domain/solicitud.repository";
import type { SolicitudDTO } from "./solicitud.dto";
import { payloadToReplyDto, solicitudDtoToDomain } from "./solicitud.mapper";

const URL = ENDPOINTS.SOLICITUDES;

export class SolicitudApiRepository implements SolicitudRepository {

    async getAll(params: PageParams & { filters?: SolicitudFilter; }): Promise<PaginatedResponse<Solicitud>> {
        const { filters, ...rest } = params;
        const res = await http.get<PaginatedResponse<SolicitudDTO>>(URL, {
            params: { ...rest, ...filters },
        });
        return { ...res.data, data: (res.data.data ?? []).map(solicitudDtoToDomain) };
    }

    async reply(payload: SolicitudRespuestaPayload): Promise<ApiResponseVoid> {
        const dto = payloadToReplyDto(payload);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        return res.data;
    }

}