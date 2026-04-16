import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { VerificarPayload } from "../../domain/payload/verificar.payload";
import type { VerificarRepository } from "../../domain/repository/verificar.repository";

export class VerificarUseCases {

    private readonly repo: VerificarRepository;

    constructor(repo: VerificarRepository) {
        this.repo = repo;
    }

    verify(payload: VerificarPayload): Promise<ApiResponseVoid> {
        return this.repo.verifyCode(payload);
    }

}