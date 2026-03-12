import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AsociadoFilter } from "../domain/asociado.filters";
import type { Asociado, AsociadoEstadoPayload, AsociadoId, AsociadoImagenPayload, AsociadoPayload } from "../domain/asociado.model";
import type { AsociadoRepository } from "../domain/asociado.repository";

export class AsociadoUseCases {

    private readonly repo: AsociadoRepository;

    constructor(repo: AsociadoRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & { filters?: AsociadoFilter }): Promise<PaginatedResponse<Asociado>> {
        return this.repo.getAll(params);
    }

    getAsociados(): Promise<Asociado[]> {
        return this.repo.getAsociados();
    }

    create(payload: AsociadoPayload): Promise<ApiResponse<Asociado>> {
        return this.repo.create(payload);
    }

    updateImagen(payload: AsociadoImagenPayload): Promise<ApiResponseVoid> {
        return this.repo.updateImagen(payload);
    }

    update(payload: AsociadoPayload): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    updateEstado(payload: AsociadoEstadoPayload): Promise<ApiResponseVoid> {
        return this.repo.updateEstado(payload);
    }

    delete(id: AsociadoId): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }

    deleteImagen(id: AsociadoId): Promise<ApiResponseVoid> {
        return this.repo.deleteImagen(id);
    }
}
