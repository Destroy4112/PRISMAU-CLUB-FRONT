export interface FinanzaDto {
    ingresos: {
        mensualidades: number;
        cuotas_baile: number;
        total: number;
    };
    pendientes: {
        mensualidades: {
            registros: number;
            monto: number;
        };
        cuotas_baile: {
            registros: number;
            monto: number;
        };
    };
}