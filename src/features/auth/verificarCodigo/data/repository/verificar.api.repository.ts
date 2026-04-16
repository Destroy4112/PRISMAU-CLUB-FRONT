import { http2 } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { VerificarPayload } from "../../domain/payload/verificar.payload";
import type { VerificarRepository } from "../../domain/repository/verificar.repository";
import { verificarPayloadToDto } from "../mappers/verificar.mapper";

const URL = ENDPOINTS.VERIFY_CODE;

export class VerificarApiRepository implements VerificarRepository {

    async verifyCode(payload: VerificarPayload): Promise<ApiResponseVoid> {
        const dto = verificarPayloadToDto(payload);
        const res = await http2.post<ApiResponseVoid>(URL, dto);
        if (!res.data.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

}