import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { BusquedaRepository } from "../domain/busqueda.repository";
import type { ResultSearchResponse } from "../domain/usuario-search.model";
import type { ResultSearchResponseDTO } from "./busqueda.dto";
import { busquedaDtoToDomain } from "./busqueda.mapper";

const URL = ENDPOINTS.USUARIO;

export class BusquedaApiRepository implements BusquedaRepository {

    async get(documento: string): Promise<ResultSearchResponse> {
        const res = await http.get<ResultSearchResponseDTO>(`${URL}/${documento}`);

        if (!res.data.status) return { status: false, message: res.data.message, };

        return {
            status: true,
            data: {
                ...res.data.data,
                principal: busquedaDtoToDomain(res.data.data.user),
                relacionado: res.data.data.relacionado ? busquedaDtoToDomain(res.data.data.relacionado) : null,
            }
        }

    }

}