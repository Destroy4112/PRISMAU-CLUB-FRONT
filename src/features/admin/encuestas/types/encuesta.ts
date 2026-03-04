import type { IEncuesta, IPregunta, IRespuesta } from "@models/entities/Entity.model"
import type { ChangeEvent } from "react"

export type FormEncuestaProps = {
    encuesta: IEncuesta,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export type ColumnEncuestaProps = {
    cargarEncuesta: (encuesta: IEncuesta) => void,
    handleDelete: (id: number) => void
}

export type FormPreguntaRespuestaProps = {
    name: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ColumnsPreguntaRespuestaProps = {
    name: 'Pregunta' | 'Respuesta';
    cargar: (item: IPregunta | IRespuesta) => void;
    handleDelete: (id: number) => void;
};