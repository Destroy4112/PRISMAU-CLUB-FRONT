import type { Pregunta } from "../../domain/model/pregunta.model";

export type PreguntaModalKey = "crearEditar";

export type PreguntaContext = {
   encuesta_id: number,
}

export const buildPreguntaContext = (encuesta_id: number): PreguntaContext => ({
   encuesta_id
})

export type PreguntaForm = {
   pregunta: string,
}

export const INITIAL_FORM_PREGUNTA = (): PreguntaForm => ({
   pregunta: "",
});

export type FormPreguntaProps = {
   value: string;
   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export type ColumnsPreguntaProps = {
   cargar: (row: Pregunta) => void;
   goRespuestas: (pregunta: Pregunta) => void;
   handleDelete: (id: number) => void;
}