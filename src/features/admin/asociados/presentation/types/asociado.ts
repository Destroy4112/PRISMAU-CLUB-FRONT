import type { ChangeEvent } from "react";
import type { Asociado } from "../../domain/model/asociado.model";

export type AsociadoModalKey = "crearEditar" | "estado" | "imagen";

export type AsociadoForm = {
    nombre: string;
    apellidos: string;
    codigo: string;
    tipoDocumento: string;
    documento: string;
    correo: string;
    telefono: string;
    fechaNacimiento: string;
    lugarNacimiento: string;
    sexo: string;
    direccionResidencia: string;
    ciudadResidencia: string;
    tiempoResidencia: string;
    estadoCivil: string;
    profesion: string;
    trabajo: string;
    cargo: string;
    tiempoServicio: string;
    telOficina: string;
    direccionOficina: string;
    ciudadOficina: string;
    estado: number;
}

export const ASOCIADO_FORM_INITIAL: AsociadoForm = {
    nombre: "",
    apellidos: "",
    codigo: "",
    tipoDocumento: "",
    documento: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
    lugarNacimiento: "",
    sexo: "",
    direccionResidencia: "",
    ciudadResidencia: "",
    tiempoResidencia: "",
    estadoCivil: "",
    profesion: "",
    trabajo: "",
    cargo: "",
    tiempoServicio: "",
    telOficina: "",
    direccionOficina: "",
    ciudadOficina: "",
    estado: 1
}

export interface FiltersAsociado {
    nombre?: string;
    apellidos?: string;
    documento?: string;
    estado?: number;
}

export const INITIAL_FILTERS_ASOCIADO: FiltersAsociado = {
    nombre: "",
    apellidos: "",
    documento: "",
    estado: 10
}

export interface AsociadoEstadoForm {
    id: number,
    estado: number
    motivo: string
}

export const ASOCIADO_ESTADO_INITIAL: AsociadoEstadoForm = {
    id: 0,
    estado: -1,
    motivo: ""
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