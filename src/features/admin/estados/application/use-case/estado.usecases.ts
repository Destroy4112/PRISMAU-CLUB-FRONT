import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Estado } from "../../domain/models/estado.model";
import type { EstadoRepository } from "../../domain/repository/estado.repository";

export class EstadoUseCases {

   private readonly repo: EstadoRepository;

   constructor(repo: EstadoRepository) {
      this.repo = repo;
   }

   getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Estado>> {
      return this.repo.getAll(params);
   }

}
