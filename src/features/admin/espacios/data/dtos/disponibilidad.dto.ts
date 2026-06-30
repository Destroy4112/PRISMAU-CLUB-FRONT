import type { DiaSemana } from "../../domain/model/disponibilidad.model";

export interface DisponibilidadDTO {
    id: number;
    espacio_id: number;
    Dia: DiaSemana;
    Inicio: string;
    Fin: string;
}

export interface SaveDisponibilidadDTO {
    espacio_id: number;
    disponibilidades: Array<{
        id?: number;
        Dia: string;
        Inicio: string;
        Fin: string;
    }>;
}