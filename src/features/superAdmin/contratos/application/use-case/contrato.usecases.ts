import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Contrato } from "../../domain/models/contrato.model";
import type { ContratoRepository } from "../../domain/repository/contrato.repository";

export class ContratoUseCases {

   private readonly repo: ContratoRepository;

   constructor(repo: ContratoRepository) {
      this.repo = repo;
   }

   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Contrato>> {
      return this.repo.getAll(params);
   }

}
