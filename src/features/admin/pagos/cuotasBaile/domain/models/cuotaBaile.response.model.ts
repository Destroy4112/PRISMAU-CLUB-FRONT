export interface PagoCuotaBaileResponse {
    montoPagado: number;
    montoRestante: number;
    pagos: PagoCuotaBaileAplicado[];
}

export interface PagoCuotaBaileAplicado {
    cuotaBaileId: number;
    descripcion: string;
    saldoAnterior: number;
    valorAplicado: number;
    saldoNuevo: number;
    pagada: boolean;
}

export type CuotaBaileStats = {
    total: number;
    pagadas: number;
    pendientes: number;
};