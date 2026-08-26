import type { SessionResponse } from "@features/auth/shared/domain/models/session.model";
import type { LoginInput } from "../../application/contracts/login.input";

export interface LoginRepository {
   iniciarSesion(login: LoginInput): Promise<SessionResponse>;
}