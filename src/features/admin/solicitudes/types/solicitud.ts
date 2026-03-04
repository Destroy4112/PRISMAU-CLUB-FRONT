import type { ISolicitud } from "@models/entities/Entity.model";
import type { ChangeEvent } from "react";

export interface IFilterSolicitud {
    Nombre?: string;
    Apellidos?: string;
    Estado?: number;
}

export interface FormSolicitudesProps {
    solicitud: ISolicitud;
    handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}