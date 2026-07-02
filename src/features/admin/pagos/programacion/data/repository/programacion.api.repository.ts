import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { ProgramacionInput } from "../../application/contracts/programacion.input";
import type { ProgramacionRepository } from "../../domain/repository/programacion.repository";
import { programacionToCreateDto } from "../mapper/programacion.mapper";

const URL = ENDPOINTS.FACTURAS;

export class ProgramacionApiRepository implements ProgramacionRepository {

    async create(programacion: ProgramacionInput): Promise<ApiResponseVoid> {
        const data = programacionToCreateDto(programacion);
        const res = await http.post<ApiResponseVoid>(URL, data);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

}