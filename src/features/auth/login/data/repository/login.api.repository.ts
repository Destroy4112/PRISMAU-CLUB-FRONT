import { ENDPOINTS } from "@core/constants/endpoints";
import { http2 } from "@core/http/axios.instance";
import type { SessionResponseDto } from "@features/auth/shared/data/dtos/session.dto";
import { sessionDtoToDomain } from "@features/auth/shared/data/mappers/session.mapper";
import type { SessionResponse } from "@features/auth/shared/domain/models/session.model";
import type { LoginInput } from "../../application/contracts/login.input";
import type { LoginRepository } from "../../domain/repository/login.repository";
import { loginPayloadToDto } from "../mappers/login.mapper";

const URL = ENDPOINTS.AUTH;

export class LoginApiRepository implements LoginRepository {

   async iniciarSesion(payload: LoginInput): Promise<SessionResponse> {
      const requestDto = loginPayloadToDto(payload);
      const res = await http2.post<SessionResponseDto>(URL, requestDto);
      if (!res.data.status) return { ...res.data, errors: res.data.errors };
      return { status: true, data: sessionDtoToDomain(res.data.data) };
   }

}