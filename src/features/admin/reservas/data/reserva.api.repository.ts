import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { ReservaFilter } from "../domain/reserva.filters";
import type { Reserva } from "../domain/reserva.model";
import type { ReservaRepository } from "../domain/reserva.repository";
import type { ReservaDTO } from "./reserva.dto";
import { reservaDtoToDomain } from "./reserva.mapper";

const URL = ENDPOINTS.RESERVAS;

export class ReservaApiRepository implements ReservaRepository {

    async getAll(params: PageParams & { filters?: ReservaFilter; }): Promise<PaginatedResponse<Reserva>> {
        const { filters, ...rest } = params;
        const res = await http.get<PaginatedResponse<ReservaDTO>>(URL, {
            params: { ...rest, ...filters },
        });
        return { ...res.data, data: (res.data.data ?? []).map(reservaDtoToDomain) };
    }

}