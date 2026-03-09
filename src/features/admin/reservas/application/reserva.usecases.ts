import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { ReservaFilter } from "../domain/reserva.filters";
import type { Reserva } from "../domain/reserva.model";
import type { ReservaRepository } from "../domain/reserva.repository";

export class ReservaUseCases {

    private readonly repo: ReservaRepository;

    constructor(repo: ReservaRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & { filters?: ReservaFilter }): Promise<PaginatedResponse<Reserva>> {
        return this.repo.getAll(params);
    }

}
