import type { ChangeEvent } from "react";
import type { Solicitud } from "../../domain/solicitud.model";

export type SolicitudModalKey = 'reply';

export interface FilterSolicitud {
    Nombre?: string;
    Apellidos?: string;
    Estado?: number;
}

export const INITIAL_FILTERS_SOLICITUD: FilterSolicitud = {
    Nombre: '',
    Apellidos: '',
    Estado: 10
}

export interface SolicitudReplyForm {
    id: number | null;
    Respuesta: string;
}

export const INITIAL_SOLICITUD_REPLY_FORM: SolicitudReplyForm = {
    id: null,
    Respuesta: ''
}

export interface FormSolicitudesProps {
    solicitud: Solicitud | null;
    form: SolicitudReplyForm;
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}