import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Filter } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorInput } from "../../application/contracts/administrador.input";
import type { Administrador, AdministradorId } from "../../domain/models/administrador.model";
import type { AdministradorRepository } from "../../domain/repository/administrador.repository";
import type { AdministradorDTO } from "../dtos/administrador.dto";
import { administradorDtoToDomain, payloadToCreateDto, payloadToUpdateDto } from "../mappers/administrador.mapper";

const URL = ENDPOINTS.ADMINS;

export class AdministradorApiRepository implements AdministradorRepository {

    private buildParams(params: PageParams & Filter) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined,
        };
    }

    async getAll(params: PageParams & Filter): Promise<PaginatedResponse<Administrador>> {
        const res = await http.get<PaginatedResponse<AdministradorDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(administradorDtoToDomain) };
    }

    async create(administrador: AdministradorInput): Promise<ApiResponseVoid> {
        const dto = payloadToCreateDto(administrador);
        const res = await http.post<ApiResponseVoid>(URL, dto);
        if (!res.data?.status) return { status: false, errors: res.data.errors }
        return res.data;
    }

    async update(administrador: AdministradorInput): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(administrador);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { status: false, errors: res.data.errors }
        return res.data;
    }

    async updateStatus(id: AdministradorId): Promise<ApiResponseVoid> {
        const res = await http.put<ApiResponseVoid>(`${URL}/status/${id}`);
        if (!res.data?.status) return { status: false, errors: res.data.errors }
        return res.data;
    }

    async delete(id: AdministradorId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { status: false, errors: res.data.errors }
        return res.data;
    }
}