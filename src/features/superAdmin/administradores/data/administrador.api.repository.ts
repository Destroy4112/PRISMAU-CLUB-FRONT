import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorFilter } from "../domain/administrador.filters";
import type { Administrador, AdministradorId, AdministradorPayload } from "../domain/administrador.model";
import type { AdministradorRepository } from "../domain/administrador.repository";
import type { AdministradorDTO } from "./administrador.dto";
import { administradorDtoToDomain, payloadToCreateDto, payloadToUpdateDto } from "./administrador.mapper";

const URL = ENDPOINTS.ADMINS;

export class AdministradorApiRepository implements AdministradorRepository {

    async getAll(params: PageParams & { filters?: AdministradorFilter; }): Promise<PaginatedResponse<Administrador>> {
        const { filters, ...rest } = params;
        const res = await http.get<PaginatedResponse<AdministradorDTO>>(URL, {
            params: { ...rest, ...filters },
        });
        return { ...res.data, data: (res.data.data ?? []).map(administradorDtoToDomain) };
    }

    async create(administrador: AdministradorPayload): Promise<ApiResponse<Administrador>> {
        const dto = payloadToCreateDto(administrador);
        const res = await http.post<ApiResponse<AdministradorDTO>>(URL, dto);
        if (!res.data?.status) return res.data as ApiResponse<Administrador>;
        return { ...res.data, data: administradorDtoToDomain(res.data.data) };
    }

    async update(administrador: AdministradorPayload): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(administrador);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        return res.data;
    }

    async updateStatus(id: AdministradorId): Promise<ApiResponseVoid> {
        const res = await http.put<ApiResponseVoid>(`${URL}/status/${id}`);
        return res.data;
    }

    async delete(id: AdministradorId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    }
}