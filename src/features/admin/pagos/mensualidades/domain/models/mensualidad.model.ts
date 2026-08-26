export interface Mensualidad {
   id: number;
   userId: number;
   fecha: string;
   valor: number;
   estado: boolean;
   abono: number;
   restante: number;
   pagos: PagoMensualidad[]
}

export interface PagoMensualidad {
   id: number
   mensualidadId: number,
   email: string | null,
   nombre: string | null,
   identificacion: string | null,
   metodoPago: string,
   referenciaPago: string,
   monto: number,
   tarjeta: string | null,
   fechaPago: string,
   soporte: string | null,
}