import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { CambiarInput } from "../../application/contracts/cambiar.input";
import type { CambiarContext, CambiarForm } from "../types/cambiarClave";

export const cambiarFormToPayload = (cambiar: CambiarForm, context: CambiarContext): CambiarInput => {
   return {
      documento: safeTrim(context.documento),
      code: safeTrim(context.code),
      new_password: safeTrim(cambiar.new_password),
   };
};