import type { CambiarInput } from "../../application/contracts/cambiar.input";
import type { CambiarDto } from "../dto/cambiar.dto";

export const cambiarPayloadToDto = (payload: CambiarInput): CambiarDto => {
   return {
      Documento: payload.documento,
      code: payload.code,
      new_password: payload.new_password
   }
}