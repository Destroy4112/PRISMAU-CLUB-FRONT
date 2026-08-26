import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { CreateEmpleadoInput, EmpleadoImagenInput, UpdateEmpleadoInput } from "../../application/contracts/empleado.input";
import type { Empleado } from "../../domain/model/empleado.model";
import type { EmpleadoRepository } from "../../domain/repository/empleado.repository";
import type { EmpleadoDTO } from "../dtos/empleado.dto";
import { empleadoDtoToDomain, empleadoInputToCreateDto, empleadoInputToImagenDto, empleadoInputToUpdateDto } from "../mappers/empleado.mapper";

const URL = ENDPOINTS.EMPLEADOS;

export class EmpleadoApiRepository implements EmpleadoRepository {

   private buildParams(params: PageParams & FilterWithState) {
      return {
         page: params.page,
         limit: params.limit,
         search: params.search.trim() || undefined,
         state: params.state
      }
   }

   async getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Empleado>> {
      const res = await http.get<PaginatedResponse<EmpleadoDTO>>(URL, {
         params: this.buildParams(params)
      });
      return { ...res.data, data: (res.data.data ?? []).map(empleadoDtoToDomain) };
   }

   async create(empleado: CreateEmpleadoInput): Promise<ApiResponseVoid> {
      const dto = empleadoInputToCreateDto(empleado);
      const res = await http.post<ApiResponse<EmpleadoDTO>>(URL, dto);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async updateImagen(data: EmpleadoImagenInput): Promise<ApiResponseVoid> {
      const dto = empleadoInputToImagenDto(data);
      const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${data.id}`, dto, {
         headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data;
   }

   async update(empleado: UpdateEmpleadoInput): Promise<ApiResponseVoid> {
      const dto = empleadoInputToUpdateDto(empleado);
      const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async delete(id: number): Promise<ApiResponseVoid> {
      const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async deleteImagen(id: number): Promise<ApiResponseVoid> {
      const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
      if (!res.data?.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }
}