import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Estado } from "../../domain/models/estado.model";
import type { EstadoRepository } from "../../domain/repository/estado.repository";
import type { EstadoDTO } from "../dto/estado.dto";
import { estadoDtoToDomain } from "../mapper/estado.mapper";

const URL = ENDPOINTS.ESTADOS;

export class EstadoApiRepository implements EstadoRepository {

    private buildParams(params: PageParams & FilterWithState) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined,
            state: params.state ?? undefined
        }
    }

    async getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Estado>> {
        const res = await http.get<PaginatedResponse<EstadoDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(estadoDtoToDomain) };
    }

} 