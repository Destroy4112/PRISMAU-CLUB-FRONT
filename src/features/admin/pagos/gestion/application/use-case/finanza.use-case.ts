import type { Finanza } from "../../domain/model/finanza.model";
import type { FinanzaRepository } from "../../domain/repository/finanza.repository";

export class FinanzaUseCases {

    private readonly repository: FinanzaRepository;

    constructor(repo: FinanzaRepository) {
        this.repository = repo;
    }

    getFinanza(): Promise<Finanza> {
        return this.repository.getFinanza()
    }
}