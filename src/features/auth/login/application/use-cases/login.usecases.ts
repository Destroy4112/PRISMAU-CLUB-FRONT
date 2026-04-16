import type { LoginRepository } from "../../domain/repository/login.repository";
import type { LoginPayload } from "../../domain/payload/login.payload";
import type { SessionResponse } from "@features/auth/domain/models/session.model";

export class LoginUseCases {

    private readonly repo: LoginRepository;

    constructor(repo: LoginRepository) {
        this.repo = repo;
    }

    iniciarSesion(payload: LoginPayload): Promise<SessionResponse> {
         return this.repo.iniciarSesion(payload);
    }

}