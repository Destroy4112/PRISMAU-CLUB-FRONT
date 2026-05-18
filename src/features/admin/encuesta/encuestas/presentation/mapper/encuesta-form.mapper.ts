import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { EncuestaInput } from "../../application/contracts/encuesta.input";
import type { Encuesta } from "../../domain/model/encuesta.model";
import type { EncuestaForm } from "../types/encuesta";

export function encuestaFormToPayload(form: EncuestaForm, id?: number): EncuestaInput {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}

export function encuestaDomainToForm(payload: Encuesta): EncuestaForm {
    return {
        titulo: safeTrim(payload.titulo),
        descripcion: safeTrim(payload.descripcion),
    };
}