import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { PreguntaInput } from "../../application/contracts/pregunta.input";
import type { Pregunta } from "../../domain/model/respuesta-encuesta.model";
import type { PreguntaContext, PreguntaForm } from "../types/respuesta-encuesta";

export function preguntaFormToPayload(form: PreguntaForm, context: PreguntaContext, id?: number): PreguntaInput {
    return {
        ...(id != null ? { id } : {}),
        encuestaId: context.encuesta_id,
        pregunta: safeTrim(form.pregunta),
    };
}

export function preguntaDomainToForm(payload: Pregunta): PreguntaForm {
    return {
        pregunta: safeTrim(payload.pregunta),
    };
}