import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@core/constants/endpoints";
import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Acceso } from "../../domain/models/acceso.model";
import type { AccesoRepository } from "../../domain/repository/acceso.repository";
import type { AccesoDTO } from "../dto/acceso.dto";
import { accesoDtoToDomain } from "../mapper/acceso.mapper";

const URL = ENDPOINTS.ACCESOS;

export class AccesoApiRepository implements AccesoRepository {

   private buildParams(params: PageParams & Filter) {
      return {
         page: params.page,
         limit: params.limit,
         search: params.search.trim() || undefined
      }
   }

   async getAll(params: PageParams & Filter): Promise<PaginatedResponse<Acceso>> {
      const res = await http.get<PaginatedResponse<AccesoDTO>>(URL, {
         params: this.buildParams(params),
      });
      return { ...res.data, data: (res.data.data ?? []).map(accesoDtoToDomain) };
   }

}