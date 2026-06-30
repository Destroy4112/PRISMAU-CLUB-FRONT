export const DIAS_SEMANA = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo",] as const;

export type DiaSemana = (typeof DIAS_SEMANA)[number];

export interface Disponibilidad {
    id: number;
    espacioId: number;
    dia: DiaSemana;
    inicio: string;
    fin: string;
}