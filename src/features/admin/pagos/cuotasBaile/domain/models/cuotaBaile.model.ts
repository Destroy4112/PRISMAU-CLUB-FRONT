export interface CuotaBaile {
   id: number;
   userId: number;
   descripcion: string;
   valor: number;
   abono: number;
   restante: number;
   estado: boolean;
   pagos: PagoCuotaBaile[]
}

export interface PagoCuotaBaile {
   id: number
   cuotasBaileId: number,
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