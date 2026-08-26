import type { PayMensualidadInput } from "../../application/contracts/mensualidad.input";
import type { Mensualidad } from "../../domain/models/mensualidad.model";
import type { PayMensualidadForm } from "../types/mensualidad";

export const mensualidadDomainToForm = (mensualidad: Mensualidad): PayMensualidadForm => {
   return {
      mensualidad,
      metodoPago: "",
      referenciaPago: "",
      valorDiferente: mensualidad.pagos.length > 0 ? true : false,
      valor: mensualidad.pagos.length > 0 ? mensualidad.restante : mensualidad.valor,
      soporte: null
   };

}

export function payMensualidadFormToInput(form: PayMensualidadForm): PayMensualidadInput {
   return {
      mensualidadId: form.mensualidad?.id!,
      metodoPago: form.metodoPago,
      referenciaPago: form.referenciaPago,
      valorDiferente: form.valorDiferente,
      valor: form.valor,
      soporte: form.soporte!
   };
}