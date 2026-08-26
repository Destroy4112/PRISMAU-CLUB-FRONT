import type { UsuarioDetail } from "@shared/models/usuario-detail.model";
import type { ChangeEvent } from "react";

export type SolicitudModalKey = 'reply';

export type SolicitudForm = {
   id: number;
   descripcion: string;
   tipo: string;
   userId: number;
   respuesta: string | null;
   estado: number;
   usuario: UsuarioDetail;
}

export const INITIAL_SOLICITUD_FORM: SolicitudForm = {
   id: 0,
   descripcion: '',
   tipo: '',
   userId: 0,
   respuesta: '',
   estado: 0,
   usuario: {
      id: 0,
      Nombre: '',
      Apellidos: '',
      Correo: '',
      Telefono: '',
      Documento: '',
      imagen: '',
      Sexo: '',
      rol: 0,
      user_id: 0
   }
}

export interface SolicitudReplyForm {
   id: number;
   respuesta: string;
}

export const INITIAL_SOLICITUD_REPLY_FORM: SolicitudReplyForm = {
   id: 0,
   respuesta: ''
}

export interface FormSolicitudesProps {
   solicitud: SolicitudForm;
   form: SolicitudReplyForm;
   handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}