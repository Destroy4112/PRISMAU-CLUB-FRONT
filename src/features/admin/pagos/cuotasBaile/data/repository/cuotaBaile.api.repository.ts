import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { PayCuotaBaileInput } from "../../application/contracts/cuotaBaile.input";
import type { CuotaBaile } from "../../domain/models/cuotaBaile.model";
import type { CuotaBaileStats, PagoCuotaBaileResponse } from "../../domain/models/cuotaBaile.response.model";
import type { CuotaBaileRepository } from "../../domain/repository/cuotaBaile.repository";
import type { CuotaBaileDTO } from "../dto/cuotaBaile.dto";
import type { PagoCuotaBaileResponseDto } from "../dto/cuotaBaile.response.dto";
import { cuotaBaileDtoToDomain, cuotaBailePayDtoToFormData, cuotaBailePayInputToDto, cuotaBaileResponseDtoToDomain } from "../mapper/cuotaBaile.mapper";

const URL = ENDPOINTS.CUOTAS_BAILE;

export class CuotaBaileApiRepository implements CuotaBaileRepository {

   private buildParams(params: PageParams & FilterWithState): PageParams & FilterWithState {
      return {
         page: params.page,
         limit: params.limit,
         search: params.search.trim(),
         state: params.state
      }
   }

   async get(documento: string, params: PageParams & FilterWithState): Promise<PaginatedResponse<CuotaBaile, CuotaBaileStats>> {
      const res = await http.get<PaginatedResponse<CuotaBaileDTO, CuotaBaileStats>>(`${URL}/${documento}`, {
         params: this.buildParams(params),
      });
      return { ...res.data, data: (res.data.data ?? []).map(cuotaBaileDtoToDomain) };
   }

   async pay(payload: PayCuotaBaileInput): Promise<ApiResponse<PagoCuotaBaileResponse>> {
      const dto = cuotaBailePayInputToDto(payload);
      const data = cuotaBailePayDtoToFormData(dto);
      const res = await http.post<ApiResponse<PagoCuotaBaileResponseDto>>(URL, data, {
         headers: { 'Content-Type': 'multipart/form-data' }
      });
      if (res.data.status == false) return { ...res.data, message: res.data.message };
      return { ...res.data, data: cuotaBaileResponseDtoToDomain(res.data.data) };
   }

}