import type { ProgramacionPagoForm } from "../presentation/types/programacion.ui.types";
import type { ProgramacionPagoCreateDto } from "./programacion.dto";

export function programacionToCreateDto(form: ProgramacionPagoForm): ProgramacionPagoCreateDto {
  if (form.rubro_id == null) {
    throw new Error("Debe seleccionar un rubro");
  }

  return {
    rubro_id: form.rubro_id,
    anio: form.anio.trim(),
    cuotas: form.cuotas,
  };
}