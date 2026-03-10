import type { Pregunta } from "../../domain/pregunta.model";

export type PreguntaModalKey = "crearEditar";

export type PreguntaForm = {
    encuesta_id: number,
    Pregunta: string,
}

export const INITIAL_FORM_PREGUNTA = (encuesta_id: number): PreguntaForm => ({
    encuesta_id,
    Pregunta: "",
});

export type FormPreguntaProps = {
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ColumnsPreguntaProps = {
    cargar: (row: Pregunta) => void;
    handleDelete: (id: number) => void;
}