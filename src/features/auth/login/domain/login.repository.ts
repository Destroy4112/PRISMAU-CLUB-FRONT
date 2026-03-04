import type { Login, LoginPayload } from "./login.model";

export interface LoginRepository {
    iniciarSesion(login: LoginPayload): Promise<Login>;
}