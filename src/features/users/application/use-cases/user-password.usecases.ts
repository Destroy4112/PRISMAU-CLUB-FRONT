import type { UserPasswordRepository } from "@features/users/domain/repositories/user-password.repository";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UserPasswordPayload } from "../contracts/user-password.payload";

export class UserPasswordUseCases {

   private readonly repo: UserPasswordRepository;

   constructor(repo: UserPasswordRepository) {
      this.repo = repo;
   }

   updatePassword(payload: UserPasswordPayload): Promise<ApiResponseVoid> {
      return this.repo.updatePassword(payload);
   }

   resetPassword(id: number): Promise<ApiResponseVoid> {
      return this.repo.resetPassword(id);
   }

}
