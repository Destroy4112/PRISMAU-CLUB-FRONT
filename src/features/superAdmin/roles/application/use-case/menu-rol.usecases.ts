import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRole } from "../../domain/model/menu-role.model";
import type { MenuRolPayload } from "../../domain/payload/menu-rol.payload";
import type { MenuRolRepository } from "../../domain/repository/menu-rol.repository";

export class MenuRolUseCases {

    private readonly repo: MenuRolRepository;

    constructor(repo: MenuRolRepository) {
        this.repo = repo;
    }

    getByRol(id: number): Promise<MenuRole[]> {
        return this.repo.getByRol(id);
    }

    create(payload: MenuRolPayload): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    delete(id: number): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
