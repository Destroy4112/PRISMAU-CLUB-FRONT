import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Acceso } from "../../domain/models/acceso.model";
import type { AccesoRepository } from "../../domain/repository/acceso.repository";

export class AccesoUseCases {

   private readonly repo: AccesoRepository;

   constructor(repo: AccesoRepository) {
      this.repo = repo;
   }

   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Acceso>> {
      return this.repo.getAll(params);
   }

}
