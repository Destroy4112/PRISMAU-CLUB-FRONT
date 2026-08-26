import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { UserPasswordRepository } from "@features/users/domain/repositories/user-password.repository";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UserPasswordPayload } from "../../application/contracts/user-password.payload";
import { userPasswordPayloadToDto } from "../mappers/user-password.mapper";

const URL = ENDPOINTS.USUARIO;

export class UserPasswordApiRepository implements UserPasswordRepository {

   async updatePassword(payload: UserPasswordPayload): Promise<ApiResponseVoid> {
      const dto = userPasswordPayloadToDto(payload);
      const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
      if (!res.data.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

   async resetPassword(id: number): Promise<ApiResponseVoid> {
      const res = await http.put<ApiResponseVoid>(`${URL}/reset-password/${id}`, {});
      if (!res.data.status) return { ...res.data, errors: res.data.errors };
      return res.data;
   }

}