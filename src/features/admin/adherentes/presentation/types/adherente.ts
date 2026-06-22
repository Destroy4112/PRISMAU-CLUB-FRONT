import type { Asociado } from "@features/admin/asociados/domain/model/asociado.model";
import type { ChangeEvent } from "react";
import type { Adherente } from "../../domain/model/adherente.model";

export type AdherenteModalKey = "crearEditar" | "estado" | "imagen";

export type AdherenteForm = {
    asociadoId: number | null;
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

export const ADHERENTE_FORM_INITIAL: AdherenteForm = {
    asociadoId: null,
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

export interface AdherenteEstadoForm {
    id: number,
    estado: number
    motivo: string
}

export const ADHERENTE_ESTADO_INITIAL: AdherenteEstadoForm = {
    id: 0,
    estado: -1,
    motivo: ""
}

export interface AdherenteImagenForm {
    id: number | null,
    imagen: File | null,
    imagenActualUrl: string;
}

export const ADHERENTE_IMAGEN_INITIAL: AdherenteImagenForm = {
    id: null,
    imagen: null,
    imagenActualUrl: ""
}

export type ColumnsAdherenteProps = {
    cargar: (adherente: Adherente) => void,
    handleDelete: (id: number) => void,
    goFamiliares: (adherente: Adherente) => void,
    changeState: (id: number) => void,
    cargarImagen: (id: number, imagen: string) => void,
    changeToAsociado: (id: number) => void,
    reset: (id: number) => void
}

export type FormAdherenteProps = {
    loading: boolean,
    form: AdherenteForm,
    asociados: Asociado[],
    touched: boolean,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}