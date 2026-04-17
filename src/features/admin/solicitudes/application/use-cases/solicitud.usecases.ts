import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudFilter } from "../../domain/models/solicitud.filters";
import type { Solicitud } from "../../domain/models/solicitud.model";
import type { SolicitudRespuestaPayload } from "../../domain/payloads/solicitud.payload";
import type { SolicitudRepository } from "../../domain/repository/solicitud.repository";

export class SolicitudUseCases {

    private readonly repo: SolicitudRepository;

    constructor(repo: SolicitudRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & { filters?: SolicitudFilter }): Promise<PaginatedResponse<Solicitud>> {
        return this.repo.getAll(params);
    }

    reply(payload: SolicitudRespuestaPayload): Promise<ApiResponseVoid> {
        return this.repo.reply(payload);
    }

}
