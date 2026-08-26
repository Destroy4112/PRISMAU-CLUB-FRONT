import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CreateFamiliarInput, FamiliarImagenInput, UpdateFamiliarInput } from "../../application/contracts/familiar.input";
import type { Familiar, FamiliarId } from "../../domain/model/familiar.model";
import type { FamiliarRepository } from "../../domain/repository/familiar.repository";
import type { FamiliarDTO } from "../dtos/familiar.dto";
import { familiarDtoToDomain, familiarInputToCreateDto, familiarInputToImagenDto, familiarInputToUpdateDto } from "../mappers/familiar.mapper";

const URL = ENDPOINTS.FAMILIARES;

export class FamiliarApiRepository implements FamiliarRepository {

   async getAll(id: number, rol: string): Promise<Familiar[]> {
      const res = await http.get<FamiliarDTO[]>(`${URL}/${id}/${rol}`);
      return res.data.map(familiarDtoToDomain);
   }

   async create(payload: CreateFamiliarInput): Promise<ApiResponseVoid> {
      const dto = familiarInputToCreateDto(payload);
      const res = await http.post<ApiResponseVoid>(URL, dto);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async updateImagen(payload: FamiliarImagenInput): Promise<ApiResponseVoid> {
      const dto = familiarInputToImagenDto(payload);
      const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${payload.id}`, dto, {
         headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
   }

   async update(payload: UpdateFamiliarInput): Promise<ApiResponseVoid> {
      const dto = familiarInputToUpdateDto(payload);
      const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async delete(id: FamiliarId): Promise<ApiResponseVoid> {
      const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async deleteImagen(id: FamiliarId): Promise<ApiResponseVoid> {
      const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }
}