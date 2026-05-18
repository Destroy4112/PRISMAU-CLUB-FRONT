import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Reserva } from "../../domain/model/reserva.model";
import type { ReservaRepository } from "../../domain/repository/reserva.repository";
import type { ReservaDTO } from "../dto/reserva.dto";
import { reservaDtoToDomain } from "../mapper/reserva.mapper";

const URL = ENDPOINTS.RESERVAS;

export class ReservaApiRepository implements ReservaRepository {

    private buildParams(params: PageParams & Filter) {
        return {
            page: params.page,
            limit: params.limit,
            search: params.search.trim() || undefined
        }
    }

    async getAll(params: PageParams & Filter): Promise<PaginatedResponse<Reserva>> {
        const res = await http.get<PaginatedResponse<ReservaDTO>>(URL, {
            params: this.buildParams(params),
        });
        return { ...res.data, data: (res.data.data ?? []).map(reservaDtoToDomain) };
    }

}