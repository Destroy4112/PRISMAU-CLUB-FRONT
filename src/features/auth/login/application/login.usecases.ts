import type { AuthSession } from "../domain/auth-session.model";
import type { LoginPayload } from "../domain/login.model";
import type { LoginRepository } from "../domain/login.repository";

export class LoginUseCases {

    private readonly repo: LoginRepository;

    constructor(repo: LoginRepository) {
        this.repo = repo;
    }

    iniciarSesion(payload: LoginPayload): Promise<AuthSession> {
        return this.repo.iniciarSesion(payload);
    }

}
