import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Contrato } from "../../domain/models/contrato.model";
import type { ContratoRepository } from "../../domain/repository/contrato.repository";
import type { ContratoDTO } from "../dto/contrato.dto";
import { contratoDtoToDomain } from "../mapper/contrato.mapper";

const URL = ENDPOINTS.CONTRATOS;

export class ContratoApiRepository implements ContratoRepository {

    private buildParams(params: PageParams & Filter) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined
        }
    }

    async getAll(params: PageParams & Filter): Promise<PaginatedResponse<Contrato>> {
        const res = await http.get<PaginatedResponse<ContratoDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(contratoDtoToDomain) };
    }

}