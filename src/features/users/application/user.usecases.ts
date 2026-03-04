import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { UserPasswordPayload } from "../domain/user-password.model";
import type { UserRepository } from "../domain/user.repository";

export class UserUseCases {

    private readonly repo: UserRepository;

    constructor(repo: UserRepository) {
        this.repo = repo;
    }

    updatePassword(payload: UserPasswordPayload): Promise<ApiResponseVoid> {
        return this.repo.updatePassword(payload);
    }

}
