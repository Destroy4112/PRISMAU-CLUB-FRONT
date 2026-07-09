import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Mensualidad, MensualidadStats } from "../../domain/models/mensualidad.model";
import type { MensualidadRepository } from "../../domain/repository/mensualidad.repository";
import type { PayMensualidadInput } from "../contracts/mensualidad.input";

export class MensualidadUseCases {

    private readonly repo: MensualidadRepository;

    constructor(repo: MensualidadRepository) {
        this.repo = repo;
    }

    get(documento: string, params: PageParams & FilterWithState): Promise<PaginatedResponse<Mensualidad, MensualidadStats>> {
        return this.repo.get(documento, params);
    }

    pay(payload: PayMensualidadInput): Promise<ApiResponseVoid> {
        return this.repo.pay(payload);
    }

}
