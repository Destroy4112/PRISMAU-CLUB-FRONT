import type { Finanza } from "../../domain/model/finanza.model";
import type { FinanzaDto } from "../dto/finanza.dto";

export const finanzaDtoToDomain = (dto: FinanzaDto): Finanza => {
    return {
        ingresos: {
            cuotasBaile: dto.ingresos.cuotas_baile,
            mensualidades: dto.ingresos.mensualidades,
            total: dto.ingresos.total
        },
        pendientes: {
            cuotasBaile: {
                monto: dto.pendientes.cuotas_baile.monto,
                registros: dto.pendientes.cuotas_baile.registros
            },
            mensualidades: {
                monto: dto.pendientes.mensualidades.monto,
                registros: dto.pendientes.mensualidades.registros
            }
        }
    };
};