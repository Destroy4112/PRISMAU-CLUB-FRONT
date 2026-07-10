interface CuotaBaileAplicadoDto {
    cuotas_baile_id: number;
    descripcion: string;
    saldo_anterior: number;
    valor_aplicado: number;
    saldo_nuevo: number;
    pagada: boolean;
}

export interface PagoCuotaBaileResponseDto {
    monto_pagado: number;
    monto_restante: number;
    pagos_aplicados: CuotaBaileAplicadoDto[];
}