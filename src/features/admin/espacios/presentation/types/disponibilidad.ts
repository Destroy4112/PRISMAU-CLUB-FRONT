import type { DiaSemana } from "../../domain/model/disponibilidad.model";

export interface DisponibilidadForm {
    id?: number;
    dia: DiaSemana;
    inicio: string;
    fin: string;
    activo: boolean;
}
