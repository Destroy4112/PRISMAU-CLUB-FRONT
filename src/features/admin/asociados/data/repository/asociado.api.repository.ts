import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AsociadoFilter } from "../../application/contracts/asociado.filters";
import type { AsociadoEstadoInput, AsociadoImagenInput, CreateAsociadoInput, UpdateAsociadoInput } from "../../application/contracts/asociado.input";
import type { Asociado } from "../../domain/model/asociado.model";
import type { AsociadoRepository } from "../../domain/repository/asociado.repository";
import type { AsociadoDTO } from "../dtos/asociado.dto";
import { asociadoFilterToDto } from "../mappers/asociado.filter.mapper";
import { asociadoDtoToDomain, asociadoInputToCreateDto, asociadoInputToEstadoDto, asociadoInputToImagenDto, asociadoInputToUpdateDto } from "../mappers/asociado.mapper";

const URL = ENDPOINTS.ASOCIADOS;

export class AsociadoApiRepository implements AsociadoRepository {

    async getAll(params: PageParams & { filters?: AsociadoFilter; }): Promise<PaginatedResponse<Asociado>> {
        const { filters, ...rest } = params;
        const filtersDto = asociadoFilterToDto(filters);
        const res = await http.get<PaginatedResponse<AsociadoDTO>>(URL, {
            params: { ...rest, ...filtersDto },
        });
        return { ...res.data, data: (res.data.data ?? []).map(asociadoDtoToDomain) };
    }

    async getAsociados(): Promise<Asociado[]> {
        const res = await http.get<AsociadoDTO[]>(`${URL}/all`);
        return res.data.map(asociadoDtoToDomain);
    }

    async create(asociado: CreateAsociadoInput): Promise<ApiResponseVoid> {
        const dto = asociadoInputToCreateDto(asociado);
        const res = await http.post<ApiResponse<AsociadoDTO>>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async updateImagen(data: AsociadoImagenInput): Promise<ApiResponseVoid> {
        const dto = asociadoInputToImagenDto(data);
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${data.id}`, dto, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data;
    }

    async update(asociado: UpdateAsociadoInput): Promise<ApiResponseVoid> {
        const dto = asociadoInputToUpdateDto(asociado);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async updateEstado(data: AsociadoEstadoInput): Promise<ApiResponseVoid> {
        const dto = asociadoInputToEstadoDto(data);
        const res = await http.put<ApiResponseVoid>(`${URL}/status/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async delete(id: number): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async deleteImagen(id: number): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }
}