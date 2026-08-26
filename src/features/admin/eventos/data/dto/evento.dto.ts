type EventoBase = {
   Titulo: string;
   Descripcion: string;
   Vencimiento: string;
   Destinatario: string;
   Hora: string;
   Tipo: string;
   Correo: boolean;
   Push: boolean;
   Fecha: string;
}

export type EventoDTO = EventoBase & {
   id: number;
}

export type CreateEventoDTO = EventoBase;

export type UpdateEventoDTO = EventoBase & {
   id: number,
};