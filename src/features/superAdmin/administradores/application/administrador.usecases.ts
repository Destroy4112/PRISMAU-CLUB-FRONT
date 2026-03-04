import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdministradorFilter } from "../domain/administrador.filters";
import type { Administrador, AdministradorId, AdministradorPayload } from "../domain/administrador.model";
import type { AdministradorRepository } from "../domain/administrador.repository";

export class AdministradorUseCases {

    private readonly repo: AdministradorRepository;

    constructor(repo: AdministradorRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & { filters?: AdministradorFilter }): Promise<PaginatedResponse<Administrador>> {
        return this.repo.getAll(params);
    }

    create(payload: AdministradorPayload): Promise<ApiResponse<Administrador>> {
        return this.repo.create(payload);
    }

    update(payload: AdministradorPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    updateStatus(id: AdministradorId): Promise<ApiResponseVoid> {
        return this.repo.updateStatus(id);
    }

    delete(id: AdministradorId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
