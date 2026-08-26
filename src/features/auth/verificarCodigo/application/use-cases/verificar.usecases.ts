import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { VertificarInput } from "../contracts/verificar.input";
import type { VerificarRepository } from "../../domain/repository/verificar.repository";

export class VerificarUseCases {

   private readonly repo: VerificarRepository;

   constructor(repo: VerificarRepository) {
      this.repo = repo;
   }

   verify(payload: VertificarInput): Promise<ApiResponseVoid> {
      return this.repo.verifyCode(payload);
   }

}