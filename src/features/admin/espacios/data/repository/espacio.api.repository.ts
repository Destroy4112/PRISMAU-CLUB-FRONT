import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { CreateEspacioInput, UpdateEspacioInput } from "../../application/contracts/espacio.input";
import type { Espacio } from "../../domain/model/espacio.model";
import type { EspacioRepository } from "../../domain/repository/espacio.repository";
import type { EspacioDTO } from "../dtos/espacio.dto";
import { createEspacioDtoToFormData, espacioDtoToDomain, espacioInputToCreateDto, espacioInputToUpdateDto, updateEspacioDtoToFormData } from "../mappers/espacio.mapper";

const URL = ENDPOINTS.ESPACIOS;

export class EspacioApiRepository implements EspacioRepository {

   private buildParams(params: PageParams & FilterWithState) {
      return {
         page: params.page,
         limit: params.limit,
         search: params.search.trim() || undefined,
         state: params.state
      }
   }

   async getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Espacio>> {
      const res = await http.get<PaginatedResponse<EspacioDTO>>(URL, {
         params: this.buildParams(params)
      });
      return { ...res.data, data: (res.data.data ?? []).map(espacioDtoToDomain) };
   }

   async create(espacio: CreateEspacioInput): Promise<ApiResponseVoid> {
      const dto = espacioInputToCreateDto(espacio);
      const data = createEspacioDtoToFormData(dto);
      const res = await http.post<ApiResponse<EspacioDTO>>(URL, data, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async update(espacio: UpdateEspacioInput): Promise<ApiResponseVoid> {
      const dto = espacioInputToUpdateDto(espacio);
      const data = updateEspacioDtoToFormData(dto);
      data.append("_method", "PUT");
      const res = await http.post<ApiResponseVoid>(`${URL}/${dto.id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } });
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async delete(id: number): Promise<ApiResponseVoid> {
      const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

}