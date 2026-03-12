import type { PreguntaPayload } from "../domain/pregunta.model";
import type { PreguntaForm } from "../presentation/types/pregunta";

export function preguntaFormToPayload(form: PreguntaForm, id?: number): PreguntaPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}