import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CreateEventoInput, UpdateEventoInput } from "../../application/contracts/evento.input";
import type { Evento } from "../model/evento.model";

export interface EventoRepository {
    getAll(): Promise<Evento[]>;
    create(payload: CreateEventoInput): Promise<ApiResponseVoid>;
    update(payload: UpdateEventoInput): Promise<ApiResponseVoid>;
    delete(id: number): Promise<ApiResponseVoid>;
}