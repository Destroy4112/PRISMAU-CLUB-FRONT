import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Pregunta, PreguntaId } from "../../domain/model/pregunta.model";
import type { PreguntaRepository } from "../../domain/repository/pregunta.repository";
import type { PreguntaInput } from "../contracts/pregunta.input";

export class PreguntaUseCases {

   private readonly repo: PreguntaRepository;

   constructor(repo: PreguntaRepository) {
      this.repo = repo;
   }

   getAll(id: number): Promise<Pregunta[]> {
      return this.repo.getAll(id);
   }

   create(payload: PreguntaInput): Promise<ApiResponseVoid> {
      return this.repo.create(payload);
   }

   update(payload: PreguntaInput): Promise<ApiResponseVoid> {
      return this.repo.update(payload);
   }

   delete(id: PreguntaId): Promise<ApiResponseVoid> {
      return this.repo.delete(id);
   }
}
