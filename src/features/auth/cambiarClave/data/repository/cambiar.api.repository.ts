import { ENDPOINTS } from "@core/constants/endpoints";
import { http2 } from "@core/http/axios.instance";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CambiarInput } from "../../application/contracts/cambiar.input";
import type { CambiarRepository } from "../../domain/repository/cambiar.repository";
import { cambiarPayloadToDto } from "../mappers/cambiar.mapper";

const URL = ENDPOINTS.CHANGE_PASSWORD;

export class CambiarApiRepository implements CambiarRepository {

   async changePassword(payload: CambiarInput): Promise<ApiResponseVoid> {
      const dto = cambiarPayloadToDto(payload);
      const res = await http2.post<ApiResponseVoid>(URL, dto);
      if (!res.data.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

}