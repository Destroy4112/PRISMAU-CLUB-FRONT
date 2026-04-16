import { http2 } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { RecuperarRepository } from "../../domain/repository/recuperar.repository";

const URL = ENDPOINTS.RESET_PASSWORD;

export class RecuperarApiRepository implements RecuperarRepository {

    async getUser(documento: string): Promise<ApiResponseVoid> {
        const res = await http2.post<ApiResponseVoid>(URL, { Documento: documento });
        if (!res.data.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

}