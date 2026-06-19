import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Asociado } from "../../domain/model/asociado.model";
import type { AsociadoRepository } from "../../domain/repository/asociado.repository";
import type { AsociadoEstadoInput, AsociadoImagenInput, CreateAsociadoInput, UpdateAsociadoInput } from "../contracts/asociado.input";

export class AsociadoUseCases {

    private readonly repo: AsociadoRepository;

    constructor(repo: AsociadoRepository) {
        this.repo = repo;
    }

    getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Asociado>> {
        return this.repo.getAll(params);
    }

    getAsociados(): Promise<Asociado[]> {
        return this.repo.getAsociados();
    }

    create(payload: CreateAsociadoInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    updateImagen(payload: AsociadoImagenInput): Promise<ApiResponseVoid> {
        return this.repo.updateImagen(payload);
    }

    update(payload: UpdateAsociadoInput): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    updateEstado(payload: AsociadoEstadoInput): Promise<ApiResponseVoid> {
        return this.repo.updateEstado(payload);
    }

    delete(id: number): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }

    deleteImagen(id: number): Promise<ApiResponseVoid> {
        return this.repo.deleteImagen(id);
    }
}
