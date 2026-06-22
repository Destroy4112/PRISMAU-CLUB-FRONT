import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdherenteEstadoInput, AdherenteImagenInput, CreateAdherenteInput, UpdateAdherenteInput } from "../../application/contracts/adherente.input";
import type { Adherente } from "../../domain/model/adherente.model";
import type { AdherenteRepository } from "../../domain/repository/adherente.repository";
import type { AdherenteDTO } from "../dtos/adherente.dto";
import { adherenteDtoToDomain, adherenteInputToCreateDto, adherenteInputToEstadoDto, adherenteInputToImagenDto, adherenteInputToUpdateDto } from "../mappers/adherente.mapper";

const URL = ENDPOINTS.ADHERENTES;

export class AdherenteApiRepository implements AdherenteRepository {

    private buildParams(params: PageParams & FilterWithState) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined,
            state: params.state
        }
    }

    async getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Adherente>> {
        const res = await http.get<PaginatedResponse<AdherenteDTO>>(URL, {
            params: this.buildParams(params)
        });
        return { ...res.data, data: (res.data.data ?? []).map(adherenteDtoToDomain) };
    }

    async create(adherente: CreateAdherenteInput): Promise<ApiResponseVoid> {
        const dto = adherenteInputToCreateDto(adherente);
        const res = await http.post<ApiResponse<AdherenteDTO>>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async updateImagen(data: AdherenteImagenInput): Promise<ApiResponseVoid> {
        const dto = adherenteInputToImagenDto(data);
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${data.id}`, dto, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data;
    }

    async update(adherente: UpdateAdherenteInput): Promise<ApiResponseVoid> {
        const dto = adherenteInputToUpdateDto(adherente);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async updateEstado(data: AdherenteEstadoInput): Promise<ApiResponseVoid> {
        const dto = adherenteInputToEstadoDto(data);
        const res = await http.put<ApiResponseVoid>(`${URL}/status/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async changeToAsociado(id: number): Promise<ApiResponseVoid> {
        const res = await http.put<ApiResponseVoid>(`${URL}/asociado/${id}`, {});
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