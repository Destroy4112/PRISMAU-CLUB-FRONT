import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorFilter } from "../../domain/models/administrador.filters";
import type { Administrador, AdministradorId } from "../../domain/models/administrador.model";
import type { AdministradorPayload } from "../../domain/payloads/administrador.payload";
import type { AdministradorRepository } from "../../domain/repository/administrador.repository";
import type { AdministradorDTO } from "../dtos/administrador.dto";
import { administradorDtoToDomain, payloadToCreateDto, payloadToUpdateDto } from "../mappers/administrador.mapper";

const URL = ENDPOINTS.ADMINS;

export class AdministradorApiRepository implements AdministradorRepository {

    async getAll(params: PageParams & { filters?: AdministradorFilter; }): Promise<PaginatedResponse<Administrador>> {
        const { filters, ...rest } = params;
        const res = await http.get<PaginatedResponse<AdministradorDTO>>(URL, {
            params: { ...rest, ...filters },
        });
        return { ...res.data, data: (res.data.data ?? []).map(administradorDtoToDomain) };
    }

    async create(administrador: AdministradorPayload): Promise<ApiResponseVoid> {
        const dto = payloadToCreateDto(administrador);
        const res = await http.post<ApiResponseVoid>(URL, dto);
        if (!res.data?.status) return { status: false, errors: res.data.errors }
        return res.data;
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