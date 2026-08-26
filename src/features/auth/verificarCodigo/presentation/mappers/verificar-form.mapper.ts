import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { VertificarInput } from "../../application/contracts/verificar.input";
import type { VerificarContext, VerificarForm } from "../../presentation/types/verificarCodigo";

export const verificarFormToPayload = (verificar: VerificarForm, context: VerificarContext): VertificarInput => {
   return {
      documento: safeTrim(context.documento),
      code: safeTrim(verificar.code),
   };
};