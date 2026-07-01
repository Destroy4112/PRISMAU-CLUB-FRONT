import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Invitacion } from "../../domain/models/invitacion.model";
import type { InvitacionRepository } from "../../domain/repository/invitacion.repository";
import type { InvitacionDTO } from "../dto/invitacion.dto";
import { invitacionDtoToDomain } from "../mapper/invitacion.mapper";

const URL = ENDPOINTS.INVITACIONES;

export class InvitacionApiRepository implements InvitacionRepository {

    private buildParams(params: PageParams & Filter) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined
        }
    }

    async getAll(params: PageParams & Filter): Promise<PaginatedResponse<Invitacion>> {
        const res = await http.get<PaginatedResponse<InvitacionDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(invitacionDtoToDomain) };
    }

}