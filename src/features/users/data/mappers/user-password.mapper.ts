import type { UserPasswordPayload } from "@features/users/application/contracts/user-password.payload";
import type { UserPasswordDto } from "../dtos/user-password.dto";

export const userPasswordPayloadToDto = (payload: UserPasswordPayload): UserPasswordDto => ({
   ...payload
});