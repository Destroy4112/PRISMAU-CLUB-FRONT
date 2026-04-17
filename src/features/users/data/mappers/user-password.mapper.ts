import type { UserPasswordPayload } from "@features/users/domain/payloads/user-password.payload";
import type { UserPasswordDto } from "../dtos/user-password.dto";

export const userPasswordPayloadToDto = (payload: UserPasswordPayload): UserPasswordDto => ({
    ...payload
});