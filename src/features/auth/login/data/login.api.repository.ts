import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { AuthSession } from "../domain/auth-session.model";
import type { LoginPayload } from "../domain/login.model";
import type { LoginRepository } from "../domain/login.repository";
import type { LoginResponseDto } from "./login-response.dto";
import { toAuthSession, toLoginRequestDto } from "./login.mapper";

const URL = ENDPOINTS.AUTH;

export class LoginApiRepository implements LoginRepository {

    async iniciarSesion(payload: LoginPayload): Promise<AuthSession> {
        const requestDto = toLoginRequestDto(payload);
        const res = await http.post<LoginResponseDto>(URL, requestDto);
        return toAuthSession(res.data);
    }

}