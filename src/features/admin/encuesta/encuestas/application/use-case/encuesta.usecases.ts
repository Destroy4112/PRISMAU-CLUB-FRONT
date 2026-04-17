import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Encuesta, EncuestaId } from "../../domain/model/encuesta.model";
import type { EncuestaPayload } from "../../domain/payload/encuesta.payload";
import type { EncuestaRepository } from "../../domain/repository/encuesta.repository";

export class EncuestaUseCases {

    private readonly repo: EncuestaRepository;

    constructor(repo: EncuestaRepository) {
        this.repo = repo;
    }

    getAll(): Promise<Encuesta[]> {
        return this.repo.getAll();
    }

    create(payload: EncuestaPayload): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: EncuestaPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: EncuestaId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
