import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Encuesta, EncuestaId } from "../../domain/model/encuesta.model";
import type { EncuestaRepository } from "../../domain/repository/encuesta.repository";
import type { EncuestaInput } from "../contracts/encuesta.input";

export class EncuestaUseCases {

   private readonly repo: EncuestaRepository;

   constructor(repo: EncuestaRepository) {
      this.repo = repo;
   }

   getAll(): Promise<Encuesta[]> {
      return this.repo.getAll();
   }

   create(payload: EncuestaInput): Promise<ApiResponseVoid> {
      return this.repo.create(payload);
   }

   update(payload: EncuestaInput): Promise<ApiResponseVoid> {
      return this.repo.update(payload);
   }

   delete(id: EncuestaId): Promise<ApiResponseVoid> {
      return this.repo.delete(id);
   }
}
