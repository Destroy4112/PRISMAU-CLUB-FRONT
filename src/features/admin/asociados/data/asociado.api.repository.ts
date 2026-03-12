import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AsociadoFilter } from "../domain/asociado.filters";
import type { Asociado, AsociadoEstadoPayload, AsociadoId, AsociadoImagenPayload, AsociadoPayload } from "../domain/asociado.model";
import type { AsociadoRepository } from "../domain/asociado.repository";
import type { AsociadoDTO } from "./asociado.dto";
import { asociadoDtoToDomain, payloadToCreateDto, payloadToEstadoDto, payloadToImagenDto, payloadToUpdateDto } from "./asociado.mapper";

const URL = ENDPOINTS.ASOCIADOS;

export class AsociadoApiRepository implements AsociadoRepository {

    async getAll(params: PageParams & { filters?: AsociadoFilter; }): Promise<PaginatedResponse<Asociado>> {
        const { filters, ...rest } = params;
        const res = await http.get<PaginatedResponse<AsociadoDTO>>(URL, {
            params: { ...rest, ...filters },
        });
        return { ...res.data, data: (res.data.data ?? []).map(asociadoDtoToDomain) };
    }

    async getAsociados(): Promise<Asociado[]> {
        const res = await http.get<AsociadoDTO[]>(`${URL}/all`);
        return res.data.map(asociadoDtoToDomain);
    }

    async create(asociado: AsociadoPayload): Promise<ApiResponse<Asociado>> {
        const dto = payloadToCreateDto(asociado);
        const res = await http.post<ApiResponse<AsociadoDTO>>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return { ...res.data, data: asociadoDtoToDomain(res.data.data) };
    }

    async updateImagen(payload: AsociadoImagenPayload): Promise<ApiResponseVoid> {
        const dto = payloadToImagenDto(payload);
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${payload.id}`, dto, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data;
    }

    async update(asociado: AsociadoPayload): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(asociado);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async updateEstado(payload: AsociadoEstadoPayload): Promise<ApiResponseVoid> {
        const dto = payloadToEstadoDto(payload);
        const res = await http.put<ApiResponseVoid>(`${URL}/status/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async delete(id: AsociadoId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async deleteImagen(id: AsociadoId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }
}