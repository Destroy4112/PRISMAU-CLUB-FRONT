import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Menu, MenuId } from "../../domain/model/menu.model";
import type { MenuInput } from "../contracts/menu.input";
import type { MenuRepository } from "../../domain/repository/menu.repository";

export class MenuUseCases {

    private readonly repo: MenuRepository;

    constructor(repo: MenuRepository) {
        this.repo = repo;
    }

    getAll(): Promise<Menu[]> {
        return this.repo.getAll();
    }

    create(payload: MenuInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: MenuInput): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: MenuId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
