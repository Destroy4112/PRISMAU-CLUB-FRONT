import { ENDPOINTS } from "@core/constants/endpoints";
import { http2 } from "@core/http/axios.instance";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { VertificarInput } from "../../application/contracts/verificar.input";
import type { VerificarRepository } from "../../domain/repository/verificar.repository";
import { verificarPayloadToDto } from "../mappers/verificar.mapper";

const URL = ENDPOINTS.VERIFY_CODE;

export class VerificarApiRepository implements VerificarRepository {

   async verifyCode(payload: VertificarInput): Promise<ApiResponseVoid> {
      const dto = verificarPayloadToDto(payload);
      const res = await http2.post<ApiResponseVoid>(URL, dto);
      if (!res.data.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

}