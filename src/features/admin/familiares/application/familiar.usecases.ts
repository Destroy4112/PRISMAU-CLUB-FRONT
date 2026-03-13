import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Familiar, FamiliarId, FamiliarImagenPayload, FamiliarPayload } from "../domain/familiar.model";
import type { FamiliarRepository } from "../domain/familiar.repository";

export class FamiliarUseCases {

    private readonly repo: FamiliarRepository;

    constructor(repo: FamiliarRepository) {
        this.repo = repo;
    }

    getAll(id: FamiliarId, rol: string): Promise<Familiar[]> {
        return this.repo.getAll(id, rol);
    }

    create(payload: FamiliarPayload): Promise<ApiResponse<Familiar>> {
        return this.repo.create(payload);
    }

    updateImagen(payload: FamiliarImagenPayload): Promise<ApiResponseVoid> {
        return this.repo.updateImagen(payload);
    }

    update(payload: FamiliarPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: FamiliarId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }

    deleteImagen(id: FamiliarId): Promise<ApiResponseVoid> {
        return this.repo.deleteImagen(id);
    }
}
