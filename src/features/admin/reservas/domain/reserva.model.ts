import type { EspacioDetail } from "@shared/models/espacio-detail.model";
import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export type ReservaId = number;

export interface Reserva {
    id: ReservaId;
    user_id: number;
    espacio_id: number;
    Fecha: string;
    Inicio: string;
    Fin: string;
    usuario: UsuarioDetail
    espacio?: EspacioDetail
    createdAt?: string;
    updatedAt?: string;
}