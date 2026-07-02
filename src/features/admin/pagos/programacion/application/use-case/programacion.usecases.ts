import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { ProgramacionRepository } from "../../domain/repository/programacion.repository";
import type { ProgramacionInput } from "../contracts/programacion.input";

export class ProgramacionUseCases {

    private readonly repo: ProgramacionRepository;

    constructor(repo: ProgramacionRepository) {
        this.repo = repo;
    }

    create(payload: ProgramacionInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

}
