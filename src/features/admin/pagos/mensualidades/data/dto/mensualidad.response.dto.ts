interface PagoMensualidadAplicadoDto {
   mensualidad_id: number;
   fecha: string;
   saldo_anterior: number;
   valor_aplicado: number;
   saldo_nuevo: number;
   pagada: boolean;
}

export interface PagoMensualidadResponseDto {
   monto_pagado: number;
   monto_restante: number;
   pagos_aplicados: PagoMensualidadAplicadoDto[];
}