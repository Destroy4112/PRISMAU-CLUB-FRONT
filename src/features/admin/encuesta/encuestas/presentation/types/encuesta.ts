import type { ChangeEvent } from "react";
import type { Encuesta } from "../../domain/model/encuesta.model";

export type EncuestaModalKey = "crearEditar";

export type FormEncuestaProps = {
    form: EncuestaForm,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export type ColumnsEncuestaProps = {
    cargarEncuesta: (encuesta: Encuesta) => void,
    handleDelete: (id: number) => void,
}

export type EncuestaForm = {
    titulo: string,
    descripcion: string
}

export const INITIAL_ENCUESTA_FORM: EncuestaForm = {
    titulo: "",
    descripcion: "",
}