import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { CambiarPayload } from "../../domain/payload/cambiar.payload";
import type { CambiarContext, CambiarForm } from "../../presentation/types/cambiarClave";

export const cambiarFormToPayload = (cambiar: CambiarForm, context: CambiarContext): CambiarPayload => {
    return {
        documento: safeTrim(context.documento),
        code: safeTrim(context.code),
        new_password: safeTrim(cambiar.new_password),
    };
};