import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponse, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { CuotaBaile } from "../../domain/models/cuotaBaile.model";
import type { CuotaBaileStats, PagoCuotaBaileResponse } from "../../domain/models/cuotaBaile.response.model";
import type { CuotaBaileRepository } from "../../domain/repository/cuotaBaile.repository";
import type { PayCuotaBaileInput } from "../contracts/cuotaBaile.input";

export class CuotaBaileUseCases {

    private readonly repo: CuotaBaileRepository;

    constructor(repo: CuotaBaileRepository) {
        this.repo = repo;
    }

    get(documento: string, params: PageParams & FilterWithState): Promise<PaginatedResponse<CuotaBaile, CuotaBaileStats>> {
        return this.repo.get(documento, params);
    }

    pay(payload: PayCuotaBaileInput): Promise<ApiResponse<PagoCuotaBaileResponse>> {
        return this.repo.pay(payload);
    }

}
