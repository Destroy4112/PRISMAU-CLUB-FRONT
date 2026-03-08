import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { SolicitudFilter } from "../domain/solicitud.filters";
import type { Solicitud } from "../domain/solicitud.model";
import type { SolicitudRepository } from "../domain/solicitud.repository";
import { type SolicitudRespuestaPayload } from '../domain/solicitud.model';

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
