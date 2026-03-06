import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { ContratoFilter } from "../domain/contrato.filters";
import type { Contrato } from "../domain/contrato.model";
import type { ContratoRepository } from "../domain/contrato.repository";

export class ContratoUseCases {

    private readonly repo: ContratoRepository;

    constructor(repo: ContratoRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & { filters?: ContratoFilter }): Promise<PaginatedResponse<Contrato>> {
        return this.repo.getAll(params);
    }

}
