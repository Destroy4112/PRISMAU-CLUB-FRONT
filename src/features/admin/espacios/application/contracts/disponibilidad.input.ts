import type { DiaSemana } from "../../domain/model/disponibilidad.model";

export interface DisponibilidadInput {
   id?: number;
   dia: DiaSemana;
   inicio: string;
   fin: string;
}

export interface SaveDisponibilidadInput {
   espacioId: number;
   disponibilidades: DisponibilidadInput[];
}