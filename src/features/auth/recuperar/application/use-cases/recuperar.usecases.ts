import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { RecuperarRepository } from "../../domain/repository/recuperar.repository";

export class RecuperarUseCases {

   private readonly repo: RecuperarRepository;

   constructor(repo: RecuperarRepository) {
      this.repo = repo;
   }

   getUser(documento: string): Promise<ApiResponseVoid> {
      return this.repo.getUser(documento);
   }

}