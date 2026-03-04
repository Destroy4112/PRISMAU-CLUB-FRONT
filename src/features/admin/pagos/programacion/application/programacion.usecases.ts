import type { ApiResponse } from "@models/response/Response.model";
import type { Programacion } from "../domain/programacion.entity";
import type { ProgramacionRepository } from "../domain/programacion.repository";

export class ProgramacionUseCases {

    private readonly repo: ProgramacionRepository;

    constructor(repo: ProgramacionRepository) {
        this.repo = repo;
    }

    create(payload: Programacion): Promise<ApiResponse<Programacion>> {
        return this.repo.create(payload);
    }

}
