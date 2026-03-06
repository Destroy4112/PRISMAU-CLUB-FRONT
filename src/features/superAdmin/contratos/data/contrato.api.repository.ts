import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { ContratoFilter } from "../domain/contrato.filters";
import type { Contrato } from "../domain/contrato.model";
import type { ContratoRepository } from "../domain/contrato.repository";
import type { ContratoDTO } from "./contrato.dto";
import { contratoDtoToDomain } from "./contrato.mapper";

const URL = ENDPOINTS.CONTRATOS;

export class ContratoApiRepository implements ContratoRepository {

    async getAll(params: PageParams & { filters?: ContratoFilter; }): Promise<PaginatedResponse<Contrato>> {
        const { filters, ...rest } = params;
        const res = await http.get<PaginatedResponse<ContratoDTO>>(URL, {
            params: { ...rest, ...filters },
        });
        return { ...res.data, data: (res.data.data ?? []).map(contratoDtoToDomain) };
    }

}