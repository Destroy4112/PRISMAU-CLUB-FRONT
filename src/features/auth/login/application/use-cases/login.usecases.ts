import type { SessionResponse } from "@features/auth/shared/domain/models/session.model";
import type { LoginInput } from "../contracts/login.input";
import type { LoginRepository } from "../../domain/repository/login.repository";

export class LoginUseCases {

   private readonly repo: LoginRepository;

   constructor(repo: LoginRepository) {
      this.repo = repo;
   }

   iniciarSesion(payload: LoginInput): Promise<SessionResponse> {
      return this.repo.iniciarSesion(payload);
   }

}