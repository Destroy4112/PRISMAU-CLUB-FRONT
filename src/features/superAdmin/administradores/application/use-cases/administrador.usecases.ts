import type { Filter } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Administrador, AdministradorId } from "../../domain/models/administrador.model";
import type { AdministradorRepository } from "../../domain/repository/administrador.repository";
import type { AdministradorInput } from "../contracts/administrador.input";

export class AdministradorUseCases {

    private readonly repo: AdministradorRepository;

    constructor(repo: AdministradorRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & Filter): Promise<PaginatedResponse<Administrador>> {
        return this.repo.getAll(params);
    }

    create(payload: AdministradorInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: AdministradorInput): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    updateStatus(id: AdministradorId): Promise<ApiResponseVoid> {
        return this.repo.updateStatus(id);
    }

    delete(id: AdministradorId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
