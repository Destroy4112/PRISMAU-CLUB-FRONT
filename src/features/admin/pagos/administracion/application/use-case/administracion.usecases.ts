import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Socio } from "../../domain/models/socio.model";
import type { AdministracionRepository } from "../../domain/repository/administracion.repository";
import type { UpdateSocioValueInput } from "../contracts/socio.input";

export class AdministracionUseCases {

   private readonly repo: AdministracionRepository;

   constructor(repo: AdministracionRepository) {
      this.repo = repo;
   }

   getSocios(params: PageParams & FilterWithState): Promise<PaginatedResponse<Socio>> {
      return this.repo.getSocios(params);
   }

   updateSocioValue(socio: UpdateSocioValueInput): Promise<ApiResponseVoid> {
      return this.repo.updateSocioValue(socio);
   }

}
