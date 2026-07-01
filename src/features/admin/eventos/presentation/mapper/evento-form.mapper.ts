import type { CreateEventoInput, UpdateEventoInput } from "../../application/contracts/evento.input";
import type { Evento } from "../../domain/model/evento.model";
import type { EventoForm } from "../types/evento";

export function eventoFormToCreateInput(form: EventoForm): CreateEventoInput {
    return {
        ...form,
    };
}

export function eventoFormToUpdateInput(form: EventoForm, id: number): UpdateEventoInput {
    return {
        id,
        ...form,
    };
}

export function eventoDomainToForm(domain: Evento): EventoForm {
    return {
        ...domain,
    };
}