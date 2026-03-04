import type { Login, LoginPayload } from "../domain/login.model";
import type { LoginRepository } from "../domain/login.repository";

export class LoginUseCases {

    private readonly repo: LoginRepository;

    constructor(repo: LoginRepository) {
        this.repo = repo;
    }

    iniciarSesion(payload: LoginPayload): Promise<Login> {
        return this.repo.iniciarSesion(payload);
    }

}
