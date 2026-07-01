import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Evento } from "../../domain/model/evento.model";
import type { EventoRepository } from "../../domain/repository/evento.repository";
import type { CreateEventoInput, UpdateEventoInput } from "../contracts/evento.input";

export class EventoUseCases {

    private readonly repo: EventoRepository;

    constructor(repo: EventoRepository) {
        this.repo = repo;
    }

    getAll(): Promise<Evento[]> {
        return this.repo.getAll();
    }

    create(payload: CreateEventoInput): Promise<ApiResponseVoid> {
        return this.repo.create(payload);
    }

    update(payload: UpdateEventoInput): Promise<ApiResponseVoid> {
        return this.repo.update(payload);
    }

    delete(id: number): Promise<ApiResponseVoid> {
        return this.repo.delete(id);
    }

}
