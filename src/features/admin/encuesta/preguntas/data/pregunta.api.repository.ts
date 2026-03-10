import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Pregunta, PreguntaId, PreguntaPayload } from "../domain/pregunta.model";
import type { PreguntaRepository } from "../domain/pregunta.repository";
import type { PreguntaDTO } from "./pregunta.dto";
import { payloadToCreateDto, payloadToUpdateDto, preguntaDtoToDomain } from "./pregunta.mapper";

const URL = ENDPOINTS.PREGUNTAS;

export class PreguntaApiRepository implements PreguntaRepository {

    async getAll(id: number): Promise<Pregunta[]> {
        const res = await http.get<PreguntaDTO[]>(`${URL}/encuesta/${id}`);
        return res.data.map(preguntaDtoToDomain);
    }

    async create(pregunta: PreguntaPayload): Promise<ApiResponse<Pregunta>> {
        const dto = payloadToCreateDto(pregunta);
        const res = await http.post<ApiResponse<PreguntaDTO>>(URL, dto);
        if (!res.data?.status) return res.data as ApiResponse<Pregunta>;
        return { ...res.data, data: preguntaDtoToDomain(res.data.data) };
    }

    async update(pregunta: PreguntaPayload): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(pregunta);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        return res.data;
    }

    async delete(id: PreguntaId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    }
}