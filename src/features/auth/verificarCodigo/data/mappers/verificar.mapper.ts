import type { VerificarPayload } from "../../domain/payload/verificar.payload";
import type { VerificarDto } from "../dto/verificar.dto";

export const verificarPayloadToDto = (payload: VerificarPayload): VerificarDto => {
    return {
        Documento: payload.documento,
        code: payload.code
    }
}