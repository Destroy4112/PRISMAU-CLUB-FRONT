export interface MensualidadDTO {
   id: number;
   user_id: number;
   fecha: string;
   valor: number;
   estado: boolean;
   total_pagos: number;
   restante: number;
   pagos: PagoMensualidadDto[];
}

export interface PagoMensualidadDto {
   id: number,
   mensualidad_id: number,
   email: string | null,
   nombre: string | null,
   identificacion: string | null,
   metodo_pago: string,
   referencia_pago: string,
   monto: number,
   tarjeta: string | null,
   fecha_pago: string,
   soporte: string | null,
}

export interface PayMensualidadDto {
   mensualidad_id: number;
   metodo_pago: string;
   referencia_pago: string;
   valor_diferente: boolean;
   valor: number;
   soporte: File;
}