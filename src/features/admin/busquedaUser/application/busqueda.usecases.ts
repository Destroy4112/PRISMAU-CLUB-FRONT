import type { BusquedaRepository } from "../domain/busqueda.repository";
import type { ResultSearchResponse } from "../domain/usuario-search.model";

export class BusquedaUseCases {

    private readonly repo: BusquedaRepository;

    constructor(repo: BusquedaRepository) {
        this.repo = repo;
    }

    get(documento: string): Promise<ResultSearchResponse> {
        return this.repo.get(documento);
    }

}
