type EventoBase = {
   titulo: string,
   descripcion: string,
   fecha: string,
   hora: string,
   tipo: string,
   vencimiento: string,
   correo: boolean,
   push: boolean,
   destinatario: string
}

export type CreateEventoInput = EventoBase

export type UpdateEventoInput = EventoBase & {
   id: number,
}