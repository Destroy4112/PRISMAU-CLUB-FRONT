import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { OptionInput } from "../../application/contracts/option.input";
import type { Option } from "../../domain/model/option.model";
import type { OptionContext, OptionForm } from "../types/option";

export function optionFormToPayload(form: OptionForm, context: OptionContext, id?: number): OptionInput {
   return {
      ...(id != null ? { id } : {}),
      preguntaId: context.pregunta_id,
      respuesta: safeTrim(form.respuesta),
   };
}

export function optionDomainToForm(payload: Option): OptionForm {
   return {
      respuesta: safeTrim(payload.respuesta),
   };
}