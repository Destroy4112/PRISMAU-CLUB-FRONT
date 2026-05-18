import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Option, OptionId } from "../../domain/model/option.model";
import type { OptionRepository } from "../../domain/repository/option.repository";
import type { OptionInput } from "../contracts/option.input";

export class OptionUseCases {

    private readonly repo: OptionRepository;

    constructor(repo: OptionRepository) {
        this.repo = repo;
    }

    getAll(id: number): Promise<Option[]> {
        return this.repo.getAll(id);
    }

    create(payload: OptionInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: OptionInput): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: OptionId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }
}
