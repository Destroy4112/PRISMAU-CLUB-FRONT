import type { Encuesta } from "../../domain/model/encuesta.model";
import type { EncuestaPayload } from "../../domain/payload/encuesta.payload";
import type { EncuestaForm } from "../../presentation/types/encuesta";

export function encuestaFormToPayload(form: EncuestaForm, id?: number): EncuestaPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}

export function encuestaDomainToForm(payload: Encuesta): EncuestaForm {
    return {
        ...payload,
    };
}