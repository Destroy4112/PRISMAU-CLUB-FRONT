import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Pregunta, PreguntaId } from "../../domain/model/pregunta.model";
import type { PreguntaPayload } from "../../domain/payload/pregunta.payload";
import type { PreguntaRepository } from "../../domain/repository/pregunta.repository";

export class PreguntaUseCases {

    private readonly repo: PreguntaRepository;

    constructor(repo: PreguntaRepository) {
        this.repo = repo;
    }

    getAll(id: number): Promise<Pregunta[]> {
        return this.repo.getAll(id);
    }

    create(payload: PreguntaPayload): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: PreguntaPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: PreguntaId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
