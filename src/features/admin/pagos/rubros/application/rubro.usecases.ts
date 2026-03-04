import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { RubroFilter } from "../domain/rubro.filters";
import type { Rubro, RubroId, RubroPayload } from "../domain/rubro.model";
import type { RubroRepository } from "../domain/rubro.repository";

export class RubroUseCases {

    private readonly repo: RubroRepository;

    constructor(repo: RubroRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & { filters?: RubroFilter }): Promise<PaginatedResponse<Rubro>> {
        return this.repo.getAll(params);
    }

    create(payload: RubroPayload): Promise<ApiResponse<Rubro>> {
        return this.repo.create(payload);
    }

    update(payload: RubroPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: RubroId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
