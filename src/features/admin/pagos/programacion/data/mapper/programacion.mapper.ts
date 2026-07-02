import type { ProgramacionInput } from "../../application/contracts/programacion.input";
import type { CreateProgramacionDto } from "../dto/programacion.dto";

export function programacionToCreateDto(form: ProgramacionInput): CreateProgramacionDto {
    return {
        rubro_id: form.rubroId,
        anio: form.anio,
        cuotas: form.cuotas,
        isCuota: form.isCuota
    };
}