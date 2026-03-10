import type { EncuestaId } from "../domain/encuesta.model";

export type EncuestaDTO = {
    id: EncuestaId;
    Titulo: string;
    Descripcion: string;
    preguntas_count?: number;
    Estado: number;
    created_at?: string;
    updated_at?: string;
}

export interface EncuestaCreateDTO {
    Titulo: string;
    Descripcion: string;
}

export interface EncuestaUpdateDTO {
    id: EncuestaId;
    Titulo: string;
    Descripcion: string;
    Estado: number;
}