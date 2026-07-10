export interface Finanza {
    ingresos: {
        mensualidades: number;
        cuotasBaile: number;
        total: number;
    };
    pendientes: {
        mensualidades: {
            registros: number;
            monto: number;
        };
        cuotasBaile: {
            registros: number;
            monto: number;
        };
    };
}