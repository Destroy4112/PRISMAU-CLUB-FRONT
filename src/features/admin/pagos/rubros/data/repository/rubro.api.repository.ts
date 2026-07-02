import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Filter } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { CreateRubroInput, UpdateRubroInput } from "../../application/contracts/rubro.input";
import type { Rubro, RubroId } from "../../domain/model/rubro.model";
import type { RubroRepository } from "../../domain/repository/rubro.repository";
import type { RubroDTO } from "../dto/rubro.dto";
import { payloadToCreateDto, payloadToUpdateDto, rubroDtoToDomain } from "../mapper/rubro.mapper";

const URL = ENDPOINTS.RUBROS;

export class RubroApiRepository implements RubroRepository {

    private buildParams(params: PageParams & Filter): PageParams & Filter {
        return {
            search: params.search.trim(),
            page: params.page,
            limit: params.limit
        }
    }

    async getAll(): Promise<Rubro[]> {
        const res = await http.get<RubroDTO[]>(`${URL}/all`);
        return (res.data ?? []).map(rubroDtoToDomain);
    }

    async getPaginated(params: PageParams & Filter): Promise<PaginatedResponse<Rubro>> {
        const res = await http.get<PaginatedResponse<RubroDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(rubroDtoToDomain) };
    }

    async create(rubro: CreateRubroInput): Promise<ApiResponseVoid> {
        const dto = payloadToCreateDto(rubro);
        const res = await http.post<ApiResponse<RubroDTO>>(URL, dto);
        if (!res.data?.status) return res.data as ApiResponse<Rubro>;
        return res.data;
    }

    async update(rubro: UpdateRubroInput): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(rubro);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        return res.data;
    }

    async delete(id: RubroId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    }
}