import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UserPasswordPayload } from "../../domain/payloads/user-password.payload";
import type { UserPasswordRepository } from "@features/users/domain/repositories/user-password.repository";

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
