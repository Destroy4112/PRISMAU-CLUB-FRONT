import type { SessionResponse } from "@features/auth/domain/models/session.model";
import type { LoginPayload } from "../payload/login.payload";

export interface LoginRepository {
    iniciarSesion(login: LoginPayload): Promise<SessionResponse>;
}