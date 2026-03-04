import type { IAdherente, IAsociado } from "@models/usuario/Usuario.model";
import type { ChangeEvent } from "react";

export interface AdherenteEstado {
    id: number,
    Estado: number
    Motivo: string
};

export interface AdherenteImagen {
    id: number | null,
    imagen: File | FormData | null
};

export interface FiltersAdherente {
    Nombre?: string;
    Apellidos?: string;
    Documento?: string;
    Estado?: number;
};

export type ColumnsAsociadoProps = {
    cargar: (adherente: IAdherente) => void,
    handleDelete: (id: number) => void,
    goFamiliares: (adherente: IAdherente) => void,
    changeState: (id: number) => void,
    changeToAsociado: (id: number) => void,
    cargarImagen: (id: number, imagen: string) => void,
    reset: (id: number) => void
};

export type FormAdherenteProps = {
    asociados: IAsociado[] | undefined,
    adherente: IAdherente,
    touched?: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
};

export type Option = { value: number; label: string };