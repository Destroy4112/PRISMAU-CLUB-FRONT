import type { ChangeEvent } from "react";
import type { Encuesta } from "../../domain/encuesta.model";

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
    Titulo: string,
    Descripcion: string
    Estado?: number
}

export const INITIAL_FORM_ENCUESTA: EncuestaForm = {
    Titulo: "",
    Descripcion: "",
}