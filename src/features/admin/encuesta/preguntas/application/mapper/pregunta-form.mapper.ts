import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { Pregunta } from "../../domain/model/pregunta.model";
import type { PreguntaPayload } from "../../domain/payload/pregunta.payload";
import type { PreguntaContext, PreguntaForm } from "../../presentation/types/pregunta";

export function preguntaFormToPayload(form: PreguntaForm, context: PreguntaContext, id?: number): PreguntaPayload {
    return {
        ...(id != null ? { id } : {}),
        encuestaId: context.encuesta_id,
        pregunta: safeTrim(form.pregunta),
    };
}

export function preguntaDomainToForm(payload: Pregunta): PreguntaForm {
    return {
        ...payload,
    };
}