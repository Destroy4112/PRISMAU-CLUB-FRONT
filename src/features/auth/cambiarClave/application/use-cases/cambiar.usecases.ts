import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CambiarInput } from "../contracts/cambiar.input";
import type { CambiarRepository } from "../../domain/repository/cambiar.repository";

export class CambiarUseCases {

   private readonly repo: CambiarRepository;

   constructor(repo: CambiarRepository) {
      this.repo = repo;
   }

   changePassword(payload: CambiarInput): Promise<ApiResponseVoid> {
      return this.repo.changePassword(payload);
   }

}