import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRol, MenuRole, MenuRolId, MenuRolPayload } from "../domain/menu-rol.model";
import type { MenuRolRepository } from "../domain/menu-rol.repository";

export class MenuRolUseCases {

    private readonly repo: MenuRolRepository;

    constructor(repo: MenuRolRepository) {
        this.repo = repo;
    }

    getByRol(id: MenuRolId): Promise<MenuRole[]> {
        return this.repo.getByRol(id);
    }

    create(payload: MenuRolPayload): Promise<ApiResponse<MenuRol>> {
        return this.repo.create(payload);
    }

    delete(id: MenuRolId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
