import type { AuthSession } from "./auth-session.model";
import type { LoginPayload } from "./login.model";

export interface LoginRepository {
    iniciarSesion(login: LoginPayload): Promise<AuthSession>;
}