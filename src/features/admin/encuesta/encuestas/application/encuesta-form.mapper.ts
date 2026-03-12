import type { EncuestaPayload } from "../domain/encuesta.model";
import type { EncuestaForm } from "../presentation/types/encuesta";

export function encuestaFormToPayload(form: EncuestaForm, id?: number): EncuestaPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}