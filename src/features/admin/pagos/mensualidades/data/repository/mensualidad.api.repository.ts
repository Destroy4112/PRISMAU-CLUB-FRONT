import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { PayMensualidadInput } from "../../application/contracts/mensualidad.input";
import type { Mensualidad } from "../../domain/models/mensualidad.model";
import type { MensualidadStats, PagoMensualidadResponse } from "../../domain/models/mensualidad.response.model";
import type { MensualidadRepository } from "../../domain/repository/mensualidad.repository";
import type { MensualidadDTO } from "../dto/mensualidad.dto";
import type { PagoMensualidadResponseDto } from "../dto/mensualidad.response.dto";
import { mensualidadDtoToDomain, mensualidadPayDtoToFormData, mensualidadPayInputToDto, mensualidadResponseDtoToDomain } from "../mapper/mensualidad.mapper";

const URL = ENDPOINTS.MENSUALIDADES;

export class MensualidadApiRepository implements MensualidadRepository {

    private buildParams(params: PageParams & FilterWithState): PageParams & FilterWithState {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim(),
            state: params.state
        }
    }

    async get(documento: string, params: PageParams & FilterWithState): Promise<PaginatedResponse<Mensualidad, MensualidadStats>> {
        const res = await http.get<PaginatedResponse<MensualidadDTO, MensualidadStats>>(`${URL}/${documento}`, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(mensualidadDtoToDomain) };
    }

    async pay(payload: PayMensualidadInput): Promise<ApiResponse<PagoMensualidadResponse>> {
        const dto = mensualidadPayInputToDto(payload);
        const data = mensualidadPayDtoToFormData(dto);
        const res = await http.post<ApiResponse<PagoMensualidadResponseDto>>(URL, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
        if (!res.data.status) return { ...res.data, errors: res.data.errors };
        return { ...res.data, data: mensualidadResponseDtoToDomain(res.data.data) };
    }

}