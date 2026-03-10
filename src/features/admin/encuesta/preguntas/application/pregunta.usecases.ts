import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Pregunta, PreguntaId, PreguntaPayload } from "../domain/pregunta.model";
import type { PreguntaRepository } from "../domain/pregunta.repository";

export class PreguntaUseCases {

    private readonly repo: PreguntaRepository;

    constructor(repo: PreguntaRepository) {
        this.repo = repo;
    }

    getAll(id: number): Promise<Pregunta[]> {
        return this.repo.getAll(id);
    }

    create(payload: PreguntaPayload): Promise<ApiResponse<Pregunta>> {
        return this.repo.create(payload);
    }

    update(payload: PreguntaPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: PreguntaId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
