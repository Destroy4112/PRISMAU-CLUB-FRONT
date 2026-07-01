import type { CreateEventoInput, UpdateEventoInput } from "../../application/contracts/evento.input";
import type { Evento } from "../../domain/model/evento.model";
import type { CreateEventoDTO, EventoDTO, UpdateEventoDTO } from "../dto/evento.dto";

export const eventoDtoToDomain = (dto: EventoDTO): Evento => ({
    id: dto.id,
    titulo: dto.Titulo,
    descripcion: dto.Descripcion,
    vencimiento: dto.Vencimiento,
    destinatario: dto.Destinatario,
    hora: dto.Hora,
    tipo: dto.Tipo,
    correo: dto.Correo,
    push: dto.Push,
    fecha: dto.Fecha,
});

export function eventoInputToCreateDto(payload: CreateEventoInput): CreateEventoDTO {
    return {
        Titulo: payload.titulo,
        Descripcion: payload.descripcion,
        Vencimiento: payload.vencimiento,
        Destinatario: payload.destinatario,
        Hora: payload.hora,
        Tipo: payload.tipo,
        Correo: payload.correo,
        Push: payload.push,
        Fecha: payload.fecha,
    };
}

export function eventoInputToUpdateDto(payload: UpdateEventoInput): UpdateEventoDTO {
    return {
        id: payload.id,
        Titulo: payload.titulo,
        Descripcion: payload.descripcion,
        Vencimiento: payload.vencimiento,
        Destinatario: payload.destinatario,
        Hora: payload.hora,
        Tipo: payload.tipo,
        Correo: payload.correo,
        Push: payload.push,
        Fecha: payload.fecha,
    };
}