import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { SaveDisponibilidadInput } from "../../application/contracts/disponibilidad.input";
import type { Disponibilidad } from "../../domain/model/disponibilidad.model";
import type { DisponibilidadRepository } from "../../domain/repository/disponibilidad.repository";
import type { DisponibilidadDTO } from "../dtos/disponibilidad.dto";
import { disponibilidadDtoToDomain, disponibilidadInputToDto } from "../mappers/disponibilidad.mapper";

const URL = ENDPOINTS.DISPONIBILIDAD_ESPACIO;

export class DisponibilidadApiRepository implements DisponibilidadRepository {

   async get(id: number): Promise<Disponibilidad[]> {
      const res = await http.get<DisponibilidadDTO[]>(`${URL}/${id}`);
      return res.data.map(disponibilidadDtoToDomain);
   }

   async save(disponibilidad: SaveDisponibilidadInput): Promise<ApiResponseVoid> {
      const data = disponibilidadInputToDto(disponibilidad);
      const res = await http.post<ApiResponseVoid>(URL, data);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

}