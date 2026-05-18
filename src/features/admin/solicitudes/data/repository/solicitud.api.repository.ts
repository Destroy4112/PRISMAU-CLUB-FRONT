import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudRespuestaInput } from "../../application/contracts/solicitud.input";
import type { Solicitud } from "../../domain/models/solicitud.model";
import type { SolicitudRepository } from "../../domain/repository/solicitud.repository";
import type { SolicitudDTO } from "../dto/solicitud.dto";
import { payloadToReplyDto, solicitudDtoToDomain } from "../mappers/solicitud.mapper";

const URL = ENDPOINTS.SOLICITUDES;

export class SolicitudApiRepository implements SolicitudRepository {

    private buildParams(params: PageParams & FilterWithState) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined,
            state: params.state
        }
    }

    async getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Solicitud>> {
        const res = await http.get<PaginatedResponse<SolicitudDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(solicitudDtoToDomain) };
    }

    async reply(payload: SolicitudRespuestaInput): Promise<ApiResponseVoid> {
        const dto = payloadToReplyDto(payload);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

}