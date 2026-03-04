import type { IAsociado } from "@models/usuario/Usuario.model";
import type { ChangeEvent } from "react";

export interface AsociadoEstado {
    id: number,
    Estado: number
    Motivo: string
}

export interface AsociadoImagen {
    id: number | null,
    imagen: File | FormData | null
}

export interface FiltersAsociado {
    Nombre?: string;
    Apellidos?: string;
    Documento?: string;
    Estado?: number;
}

export type ColumnsAsociadoProps = {
    cargar: (asociado: IAsociado) => void,
    handleDelete: (id: number) => void,
    goFamiliares: (asociado: IAsociado) => void,
    changeState: (id: number) => void,
    cargarImagen: (id: number, imagen: string) => void,
    reset: (id: number) => void
}

export type FormAsociadoProps = {
    asociado: IAsociado,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}