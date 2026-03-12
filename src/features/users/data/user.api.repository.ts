import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UserPasswordPayload } from "../domain/user-password.model";
import type { UserRepository } from "../domain/user.repository";

const URL = ENDPOINTS.USUARIO;

export class UserApiRepository implements UserRepository {

    async updatePassword(payload: UserPasswordPayload): Promise<ApiResponseVoid> {
        const res = await http.put<ApiResponseVoid>(`${URL}/${payload.id}`, payload);
        return res.data;
    }

    async resetPassword(id: number): Promise<ApiResponseVoid> {
        const res = await http.put<ApiResponseVoid>(`${URL}/reset-password/${id}`, {});
        return res.data;
    }

}