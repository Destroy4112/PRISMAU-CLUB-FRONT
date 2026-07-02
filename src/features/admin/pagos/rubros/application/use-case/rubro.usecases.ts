import type { Filter } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Rubro, RubroId } from "../../domain/model/rubro.model";
import type { RubroRepository } from "../../domain/repository/rubro.repository";
import type { CreateRubroInput, UpdateRubroInput } from "../contracts/rubro.input";

export class RubroUseCases {

    private readonly repo: RubroRepository;

    constructor(repo: RubroRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & Filter): Promise<PaginatedResponse<Rubro>> {
        return this.repo.getAll(params);
    }

    create(payload: CreateRubroInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: UpdateRubroInput): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: RubroId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
