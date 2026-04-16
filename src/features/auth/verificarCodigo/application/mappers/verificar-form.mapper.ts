import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { VerificarPayload } from "../../domain/payload/verificar.payload";
import type { VerificarContext, VerificarForm } from "../../presentation/types/verificarCodigo";

export const verificarFormToPayload = (verificar: VerificarForm, context: VerificarContext): VerificarPayload => {
    return {
        documento: safeTrim(context.documento),
        code: safeTrim(verificar.code),
    };
};