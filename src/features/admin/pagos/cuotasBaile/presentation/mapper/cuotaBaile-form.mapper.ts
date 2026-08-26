import type { PayCuotaBaileInput } from "../../application/contracts/cuotaBaile.input";
import type { CuotaBaile } from "../../domain/models/cuotaBaile.model";
import type { PayCuotaBaileForm } from "../types/cuotaBaile";

export const cuotaBaileDomainToForm = (cuotaBaile: CuotaBaile): PayCuotaBaileForm => {
   return {
      cuotaBaile,
      metodoPago: "",
      referenciaPago: "",
      valorDiferente: cuotaBaile.pagos.length > 0 ? true : false,
      valor: cuotaBaile.pagos.length > 0 ? cuotaBaile.restante : cuotaBaile.valor,
      soporte: null
   };

}

export function payCuotaBaileFormToInput(form: PayCuotaBaileForm): PayCuotaBaileInput {
   return {
      cuotaBaileId: form.cuotaBaile?.id!,
      metodoPago: form.metodoPago,
      referenciaPago: form.referenciaPago,
      valorDiferente: form.valorDiferente,
      valor: form.valor,
      soporte: form.soporte!
   };
}