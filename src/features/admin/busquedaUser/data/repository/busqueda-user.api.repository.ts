import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { BusquedaUserResponse } from "../../domain/model/busqueda-user.model";
import type { BusquedaUserRepository } from "../../domain/repository/busqueda-user.repository";
import type { BusquedaUserResponseDTO } from "../dto/busqueda-user.dto";
import { busquedaUserDtoToDomain } from "../mapper/busqueda-user.mapper";

const URL = ENDPOINTS.USUARIO;

export class BusquedaUserApiRepository implements BusquedaUserRepository {

    async get(documento: string): Promise<BusquedaUserResponse> {
        const res = await http.get<BusquedaUserResponseDTO>(`${URL}/${documento}`);
        if (!res.data.status) return { status: false, message: res.data.message, };
        return {
            status: true,
            data: {
                ...res.data.data,
                principal: busquedaUserDtoToDomain(res.data.data.user),
                relacionado: res.data.data.relacionado ? busquedaUserDtoToDomain(res.data.data.relacionado) : null,
            }
        }

    }

}