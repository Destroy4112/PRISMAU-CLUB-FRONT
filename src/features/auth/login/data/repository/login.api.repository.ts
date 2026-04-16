import { http2 } from "@core/http/axios.instance";
import type { SessionResponseDto } from "@features/auth/data/dtos/session.dto";
import { sessionDtoToDomain } from "@features/auth/data/mappers/session.mapper";
import type { SessionResponse } from "@features/auth/domain/models/session.model";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { LoginPayload } from "../../domain/payload/login.payload";
import type { LoginRepository } from "../../domain/repository/login.repository";
import { loginPayloadToDto } from "../mappers/login.mapper";

const URL = ENDPOINTS.AUTH;

export class LoginApiRepository implements LoginRepository {

    async iniciarSesion(payload: LoginPayload): Promise<SessionResponse> {
        const requestDto = loginPayloadToDto(payload);
        const res = await http2.post<SessionResponseDto>(URL, requestDto);
        if (!res.data.status) return { ...res.data, errors: res.data.errors };
        return { status: true, data: sessionDtoToDomain(res.data.data) };
    }

}