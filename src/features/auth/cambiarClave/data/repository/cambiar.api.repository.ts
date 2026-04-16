import { http2 } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CambiarPayload } from "../../domain/payload/cambiar.payload";
import type { CambiarRepository } from "../../domain/repository/cambiar.repository";
import { cambiarPayloadToDto } from "../mappers/cambiar.mapper";

const URL = ENDPOINTS.CHANGE_PASSWORD;

export class CambiarApiRepository implements CambiarRepository {

    async changePassword(payload: CambiarPayload): Promise<ApiResponseVoid> {
        const dto = cambiarPayloadToDto(payload);
        const res = await http2.post<ApiResponseVoid>(URL, dto);
        if (!res.data.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

}