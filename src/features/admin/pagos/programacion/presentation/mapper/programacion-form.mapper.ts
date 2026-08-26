import type { ProgramacionInput } from "../../application/contracts/programacion.input";
import type { ProgramacionForm } from "../types/programacion";

export function programacionFormToCreateInput(form: ProgramacionForm): ProgramacionInput {
   if (!form.rubroId) throw new Error("El rubro es requerido");
   return {
      rubroId: Number(form.rubroId),
      anio: form.anio,
      cuotas: Number(form.cuotas),
      isCuota: form.isCuota
   };
}