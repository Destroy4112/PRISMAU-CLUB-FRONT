export type EncuestaId = number;

export interface Encuesta {
    id: EncuestaId;
    Titulo: string;
    Descripcion: string;
    Estado: number;
    preguntas_count?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface EncuestaPayload {
    id?: EncuestaId;
    Titulo: string;
    Descripcion: string;
    Estado?: number;
}