import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UserPasswordPayload } from "../payloads/user-password.payload";

export interface UserPasswordRepository {
    updatePassword(payload: UserPasswordPayload): Promise<ApiResponseVoid>;
    resetPassword(id: number): Promise<ApiResponseVoid>;
}