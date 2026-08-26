import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Reserva } from "../../domain/model/reserva.model";
import type { ReservaRepository } from "../../domain/repository/reserva.repository";

export class ReservaUseCases {

   private readonly repo: ReservaRepository;

   constructor(repo: ReservaRepository) {
      this.repo = repo;
   }

   getAll(params: PageParams & Filter): Promise<PaginatedResponse<Reserva>> {
      return this.repo.getAll(params);
   }

}