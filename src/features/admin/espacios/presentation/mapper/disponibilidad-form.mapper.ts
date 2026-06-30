import { DIAS_SEMANA, type Disponibilidad } from "../../domain/model/disponibilidad.model";
import type { DisponibilidadForm } from "../types/disponibilidad";

export function disponibilidadDomainToForm(disponibilidades: Disponibilidad[]): DisponibilidadForm[] {
    return DIAS_SEMANA.map((dia) => {
        const encontrada = disponibilidades.find((item) => item.dia === dia,);

        if (!encontrada) {
            return {
                dia,
                activo: false,
                inicio: "08:00",
                fin: "17:00",
            };
        }

        return {
            id: encontrada.id,
            dia,
            activo: true,
            inicio: encontrada.inicio,
            fin: encontrada.fin,
        };
    });
}