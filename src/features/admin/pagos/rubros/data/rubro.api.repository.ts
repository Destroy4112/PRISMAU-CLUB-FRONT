import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { RubroFilter } from "../domain/rubro.filters";
import type { Rubro, RubroId, RubroPayload } from "../domain/rubro.model";
import type { RubroRepository } from "../domain/rubro.repository";
import type { RubroDTO } from "./rubro.dto";
import { payloadToCreateDto, payloadToUpdateDto, rubroDtoToDomain } from "./rubro.mapper";

const URL = ENDPOINTS.RUBROS;

export class RubroApiRepository implements RubroRepository {

    async getAll(params: PageParams & { filters?: RubroFilter; }): Promise<PaginatedResponse<Rubro>> {
        const { filters, ...rest } = params;
        const res = await http.get<PaginatedResponse<RubroDTO>>(URL, {
            params: { ...rest, ...filters },
        });
        return { ...res.data, data: (res.data.data ?? []).map(rubroDtoToDomain) };
    }

    async create(rubro: RubroPayload): Promise<ApiResponse<Rubro>> {
        const dto = payloadToCreateDto(rubro);
        const res = await http.post<ApiResponse<RubroDTO>>(URL, dto);
        if (!res.data?.status) return res.data as ApiResponse<Rubro>;
        return { ...res.data, data: rubroDtoToDomain(res.data.data) };
    }

    async update(rubro: RubroPayload): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(rubro);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        return res.data;
    }

    async delete(id: RubroId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    }
}