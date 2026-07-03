import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { UpdateSocioValueInput } from "../../application/contracts/socio.input";
import type { Socio } from "../../domain/models/socio.model";
import type { AdministracionRepository } from "../../domain/repository/administracion.repository";
import type { SocioDTO } from "../dto/socio.dto";
import { socioDtoToDomain, socioValueInputToUpdateDto } from "../mapper/socio.mapper";

const URL = ENDPOINTS.SOCIOS;
const URL2 = ENDPOINTS.FACTURAS;

export class AdministracionApiRepository implements AdministracionRepository {

    private buildParams(params: PageParams & FilterWithState): PageParams & FilterWithState {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim(),
            state: params.state
        }
    }

    async getSocios(params: PageParams & FilterWithState): Promise<PaginatedResponse<Socio>> {
        const res = await http.get<PaginatedResponse<SocioDTO>>(`${URL}/pagos`, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(socioDtoToDomain) };
    }

    async updateSocioValue(socio: UpdateSocioValueInput): Promise<ApiResponseVoid> {
        const data = socioValueInputToUpdateDto(socio);
        const res = await http.post<ApiResponseVoid>(`${URL2}/valor`, data);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }
} 