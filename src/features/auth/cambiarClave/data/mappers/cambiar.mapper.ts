import type { CambiarPayload } from "../../domain/payload/cambiar.payload";
import type { CambiarDto } from "../dto/cambiar.dto";

export const cambiarPayloadToDto = (payload: CambiarPayload): CambiarDto => {
    return {
        Documento: payload.documento,
        code: payload.code,
        new_password: payload.new_password
    }
}