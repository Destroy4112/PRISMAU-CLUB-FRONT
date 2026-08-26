export interface CuotaBaileDTO {
   id: number;
   user_id: number;
   descripcion: string;
   valor: number;
   estado: boolean;
   total_pagos: number;
   restante: number;
   pagos: PagoCuotaBaileDto[];
}

export interface PagoCuotaBaileDto {
   id: number,
   cuotas_baile_id: number,
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

export interface PayCuotaBaileDto {
   cuotas_baile_id: number;
   metodo_pago: string;
   referencia_pago: string;
   valor_diferente: boolean;
   valor: number;
   soporte: File;
}