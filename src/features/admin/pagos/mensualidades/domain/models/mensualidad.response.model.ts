export interface PagoMensualidadResponse {
    montoPagado: number;
    montoRestante: number;
    pagos: PagoMensualidadAplicado[];
}

export interface PagoMensualidadAplicado {
    mensualidadId: number;
    fecha: string;
    saldoAnterior: number;
    valorAplicado: number;
    saldoNuevo: number;
    pagada: boolean;
}

export type MensualidadStats = {
    total: number;
    pagadas: number;
    pendientes: number;
};