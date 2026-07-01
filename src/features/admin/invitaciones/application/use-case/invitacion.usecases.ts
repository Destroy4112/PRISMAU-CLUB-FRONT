import type { Filter } from "@shared/constants/filters/filters.constant";
import type { PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Invitacion } from "../../domain/models/invitacion.model";
import type { InvitacionRepository } from "../../domain/repository/invitacion.repository";

export class InvitacionUseCases {

    private readonly repo: InvitacionRepository;

    constructor(repo: InvitacionRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & Filter): Promise<PaginatedResponse<Invitacion>> {
        return this.repo.getAll(params);
    }

}
