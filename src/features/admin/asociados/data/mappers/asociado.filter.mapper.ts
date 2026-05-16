import type { AsociadoFilter } from "../../application/contracts/asociado.filters";
import type { AsociadoFilterDto } from "../dtos/asociado.filter.dto";

export function asociadoFilterToDto(filters?: AsociadoFilter): AsociadoFilterDto | undefined {
    if (!filters) return undefined;
    return {
        Nombre: filters.nombre,
        Apellidos: filters.apellidos,
        Documento: filters.documento,
        Estado: filters.estado
    };
}