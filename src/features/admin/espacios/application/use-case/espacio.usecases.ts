import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Espacio } from "../../domain/model/espacio.model";
import type { EspacioRepository } from "../../domain/repository/espacio.repository";
import type { CreateEspacioInput, UpdateEspacioInput } from "../contracts/espacio.input";

export class EspacioUseCases {

    private readonly repo: EspacioRepository;

    constructor(repo: EspacioRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Espacio>> {
        return this.repo.getAll(params);
    }

    create(payload: CreateEspacioInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: UpdateEspacioInput): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: number): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }

}
