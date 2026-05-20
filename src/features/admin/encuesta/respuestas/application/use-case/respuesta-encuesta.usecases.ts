import type { RespuestaEncuesta } from "../../domain/model/respuesta-encuesta.model";
import type { RespuestaEncuestaRepository } from "../../domain/repository/respuesta-encuesta.repository";

export class RespuestaEncuestaUseCases {

    private readonly repo: RespuestaEncuestaRepository;

    constructor(repo: RespuestaEncuestaRepository) {
        this.repo = repo;
    }

    getAll(id: number): Promise<RespuestaEncuesta[]> {
        return this.repo.getAll(id);
    }

}
