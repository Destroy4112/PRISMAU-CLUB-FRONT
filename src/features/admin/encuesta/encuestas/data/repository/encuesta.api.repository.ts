import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Encuesta, EncuestaId } from "../../domain/model/encuesta.model";
import type { EncuestaPayload } from "../../domain/payload/encuesta.payload";
import type { EncuestaRepository } from "../../domain/repository/encuesta.repository";
import type { EncuestaDTO } from "../dto/encuesta.dto";
import { encuestaDtoToDomain, payloadToCreateDto, payloadToUpdateDto } from "../mapper/encuesta.mapper";

const URL = ENDPOINTS.ENCUESTAS;

export class EncuestaApiRepository implements EncuestaRepository {

    async getAll(): Promise<Encuesta[]> {
        const res = await http.get<EncuestaDTO[]>(URL);
        return res.data.map(encuestaDtoToDomain);
    }

    async create(encuesta: EncuestaPayload): Promise<ApiResponseVoid> {
        const dto = payloadToCreateDto(encuesta);
        const res = await http.post<ApiResponse<EncuestaDTO>>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async update(encuesta: EncuestaPayload): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(encuesta);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async delete(id: EncuestaId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }
}