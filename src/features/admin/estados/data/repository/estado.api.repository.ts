import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Estado } from "../../domain/models/estado.model";
import type { EstadoRepository } from "../../domain/repository/estado.repository";
import type { EstadoDTO } from "../dto/estado.dto";
import { estadoDtoToDomain } from "../mapper/estado.mapper";

const URL = ENDPOINTS.ESTADOS;

export class EstadoApiRepository implements EstadoRepository {

    private buildParams(params: PageParams & Filter) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined
        }
    }

    async getAll(params: PageParams & Filter): Promise<PaginatedResponse<Estado>> {
        const res = await http.get<PaginatedResponse<EstadoDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(estadoDtoToDomain) };
    }

} 