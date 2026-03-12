import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UserPasswordPayload } from "./user-password.model";

export interface UserRepository {
    updatePassword(payload: UserPasswordPayload): Promise<ApiResponseVoid>;
    resetPassword(id: number): Promise<ApiResponseVoid>;
}