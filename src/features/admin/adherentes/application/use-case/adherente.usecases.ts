import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Adherente } from "../../domain/model/adherente.model";
import type { AdherenteRepository } from "../../domain/repository/adherente.repository";
import type { AdherenteEstadoInput, AdherenteImagenInput, CreateAdherenteInput, UpdateAdherenteInput } from "../contracts/adherente.input";

export class AdherenteUseCases {

   private readonly repo: AdherenteRepository;

   constructor(repo: AdherenteRepository) {
      this.repo = repo;
   }

   getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Adherente>> {
      return this.repo.getAll(params);
   }

   create(payload: CreateAdherenteInput): Promise<ApiResponseVoid> {
      return this.repo.create(payload);
   }

   updateImagen(payload: AdherenteImagenInput): Promise<ApiResponseVoid> {
      return this.repo.updateImagen(payload);
   }

   update(payload: UpdateAdherenteInput): Promise<ApiResponseVoid> {
      return this.repo.update(payload);
   }

   updateEstado(payload: AdherenteEstadoInput): Promise<ApiResponseVoid> {
      return this.repo.updateEstado(payload);
   }

   changeToAsociado(id: number): Promise<ApiResponseVoid> {
      return this.repo.changeToAsociado(id);
   }

   delete(id: number): Promise<ApiResponseVoid> {
      return this.repo.delete(id);
   }

   deleteImagen(id: number): Promise<ApiResponseVoid> {
      return this.repo.deleteImagen(id);
   }
}
