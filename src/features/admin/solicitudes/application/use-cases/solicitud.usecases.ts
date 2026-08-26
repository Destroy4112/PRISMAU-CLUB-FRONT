import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Solicitud } from "../../domain/models/solicitud.model";
import type { SolicitudRepository } from "../../domain/repository/solicitud.repository";
import type { SolicitudRespuestaInput } from "../contracts/solicitud.input";

export class SolicitudUseCases {

   private readonly repo: SolicitudRepository;

   constructor(repo: SolicitudRepository) {
      this.repo = repo;
   }

   getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Solicitud>> {
      return this.repo.getAll(params);
   }

   reply(payload: SolicitudRespuestaInput): Promise<ApiResponseVoid> {
      return this.repo.reply(payload);
   }

}
