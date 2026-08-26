import type { VertificarInput } from "../../application/contracts/verificar.input";
import type { VerificarDto } from "../dto/verificar.dto";

export const verificarPayloadToDto = (payload: VertificarInput): VerificarDto => {
   return {
      Documento: payload.documento,
      code: payload.code
   }
}