import type { ChangeEvent } from "react";
import type { Asociado } from "../../domain/asociado.model";

export type AsociadoModalKey = "crearEditar" | "estado" | "imagen";

export type AsociadoForm = {
    Nombre: string;
    Apellidos: string;
    Codigo: string;
    TipoDocumento: string;
    Documento: string;
    Correo: string;
    Telefono: string;
    FechaNacimiento: string;
    LugarNacimiento: string;
    Sexo: string;
    DireccionResidencia: string;
    CiudadResidencia: string;
    TiempoResidencia: string;
    EstadoCivil: string;
    Profesion: string;
    Trabajo: string;
    Cargo: string;
    TiempoServicio: string;
    TelOficina: string;
    DireccionOficina: string;
    CiudadOficina: string;
    Estado: number;
}

export const ASOCIADO_FORM_INITIAL: AsociadoForm = {
    Nombre: "",
    Apellidos: "",
    Codigo: "",
    TipoDocumento: "",
    Documento: "",
    Correo: "",
    Telefono: "",
    FechaNacimiento: "",
    LugarNacimiento: "",
    Sexo: "",
    DireccionResidencia: "",
    CiudadResidencia: "",
    TiempoResidencia: "",
    EstadoCivil: "",
    Profesion: "",
    Trabajo: "",
    Cargo: "",
    TiempoServicio: "",
    TelOficina: "",
    DireccionOficina: "",
    CiudadOficina: "",
    Estado: 1
}

export interface FiltersAsociado {
    Nombre?: string;
    Apellidos?: string;
    Documento?: string;
    Estado?: number;
}

export const INITIAL_FILTERS_ASOCIADO: FiltersAsociado = {
    Nombre: "",
    Apellidos: "",
    Documento: "",
    Estado: 10
}

export interface AsociadoEstadoForm {
    id: number,
    Estado: number
    Motivo: string
}

export const ASOCIADO_ESTADO_INITIAL: AsociadoEstadoForm = {
    id: 0,
    Estado: -1,
    Motivo: ""
}

export interface AsociadoImagenForm {
    id: number | null,
    imagen: File | null,
    imagenActualUrl: string;
}

export const ASOCIADO_IMAGEN_INITIAL: AsociadoImagenForm = {
    id: null,
    imagen: null,
    imagenActualUrl: ""
}

export type ColumnsAsociadoProps = {
    cargar: (asociado: Asociado) => void,
    handleDelete: (id: number) => void,
    goFamiliares: (asociado: Asociado) => void,
    changeState: (id: number) => void,
    cargarImagen: (id: number, imagen: string) => void,
    reset: (id: number) => void
}

export type FormAsociadoProps = {
    form: AsociadoForm,
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}