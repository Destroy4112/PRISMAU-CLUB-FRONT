import type { IEmpleado } from "@models/usuario/Usuario.model";
import type { ChangeEvent } from "react";

export interface EmpleadoImagen {
    id: number | null,
    imagen: File | FormData | null
}

export interface FiltersEmpleado {
    Nombre?: string;
    Apellidos?: string;
    Documento?: string;
}

export type ColumnsEmpleadoProps = {
    cargar: (asociado: IEmpleado) => void,
    handleDelete: (id: number) => void,
    cargarImagen: (id: number, imagen: string) => void,
    reset: (id: number) => void
}

export type FormEmpleadoProps = {
    empleado: IEmpleado,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}