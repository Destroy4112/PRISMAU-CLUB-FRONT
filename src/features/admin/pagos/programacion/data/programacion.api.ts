import { http } from "@config/axiosConfig";
import { ENDPOINTS } from "@models/endpoints/Endpoints.model";
import type { ApiResponse } from "@models/response/Response.model";
import type { Programacion } from "../domain/programacion.entity";
import type { ProgramacionRepository } from "../domain/programacion.repository";

const URL = ENDPOINTS.PAGOS;

export class ProgramacionApiRepository implements ProgramacionRepository {

    async create(programacion: Programacion): Promise<ApiResponse<Programacion>> {
        const res = await http.post<ApiResponse<Programacion>>(`${URL}/generar-facturas`, programacion);
        return res.data;
    }

}