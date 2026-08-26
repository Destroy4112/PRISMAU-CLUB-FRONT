import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { PreguntaInput } from "../../application/contracts/pregunta.input";
import type { Pregunta, PreguntaId } from "../../domain/model/pregunta.model";
import type { PreguntaRepository } from "../../domain/repository/pregunta.repository";
import type { PreguntaDTO } from "../dto/pregunta.dto";
import { preguntaDtoToDomain, preguntaPayloadToCreateDto, preguntaPayloadToUpdateDto } from "../mapper/pregunta.mapper";

const URL = ENDPOINTS.PREGUNTAS;

export class PreguntaApiRepository implements PreguntaRepository {

   async getAll(id: number): Promise<Pregunta[]> {
      const res = await http.get<PreguntaDTO[]>(`${URL}/encuesta/${id}`);
      return res.data.map(preguntaDtoToDomain);
   }

   async create(pregunta: PreguntaInput): Promise<ApiResponseVoid> {
      const dto = preguntaPayloadToCreateDto(pregunta);
      const res = await http.post<ApiResponseVoid>(URL, dto);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async update(pregunta: PreguntaInput): Promise<ApiResponseVoid> {
      const dto = preguntaPayloadToUpdateDto(pregunta);
      const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async delete(id: PreguntaId): Promise<ApiResponseVoid> {
      const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }
}