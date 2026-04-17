import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudFilter } from "../../domain/models/solicitud.filters";
import type { Solicitud } from "../../domain/models/solicitud.model";
import type { SolicitudRespuestaPayload } from "../../domain/payloads/solicitud.payload";
import type { SolicitudRepository } from "../../domain/repository/solicitud.repository";
import type { SolicitudDTO } from "../dto/solicitud.dto";
import { payloadToReplyDto, solicitudDtoToDomain } from "../mappers/solicitud.mapper";

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
        if (!res.data.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

}