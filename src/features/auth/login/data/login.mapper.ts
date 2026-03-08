import type { AuthSession } from "../domain/auth-session.model";
import type { LoginPayload } from "../domain/login.model";
import type { LoginRequestDto } from "./login-request.dto";
import type { LoginResponseDto } from "./login-response.dto";

export function toAuthSession(dto: LoginResponseDto): AuthSession {
    return {
        token: dto.token,
        isAuthenticated: true,
        user: {
            id: dto.user.id,
            userId: dto.user.user_id,
            nombre: dto.user.Nombre,
            apellidos: dto.user.Apellidos,
            correo: dto.user.Correo,
            documento: dto.credenciales.Documento,
            rol: dto.credenciales.Rol,
        },
    };
}

export function toLoginRequestDto(data: LoginPayload): LoginRequestDto {
    return {
        Documento: data.Documento,
        password: data.password,
    };
}