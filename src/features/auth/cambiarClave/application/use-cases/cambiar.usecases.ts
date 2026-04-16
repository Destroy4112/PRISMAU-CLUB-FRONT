import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CambiarPayload } from "../../domain/payload/cambiar.payload";
import type { CambiarRepository } from "../../domain/repository/cambiar.repository";

export class CambiarUseCases {

    private readonly repo: CambiarRepository;

    constructor(repo: CambiarRepository) {
        this.repo = repo;
    }

    changePassword(payload: CambiarPayload): Promise<ApiResponseVoid> {
        return this.repo.changePassword(payload);
    }

}