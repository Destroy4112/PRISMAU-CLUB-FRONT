import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Menu, MenuId, MenuPayload } from "../domain/menu.model";
import type { MenuRepository } from "../domain/menu.repository";

export class MenuUseCases {

    private readonly repo: MenuRepository;

    constructor(repo: MenuRepository) {
        this.repo = repo;
    }

    getAll(): Promise<Menu[]> {
        return this.repo.getAll();
    }

    create(payload: MenuPayload): Promise<ApiResponse<Menu>> {
        return this.repo.create(payload);
    }

    update(payload: MenuPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: MenuId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
