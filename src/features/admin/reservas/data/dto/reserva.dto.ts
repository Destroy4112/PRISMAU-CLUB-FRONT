import type { EspacioDetail } from "@shared/models/espacio-detail.model";
import type { UsuarioDetail } from "@shared/models/usuario-detail.model";
import type { ReservaId } from "../../domain/model/reserva.model";

export type ReservaDTO = {
    id: ReservaId;
    user_id: number;
    espacio_id: number;
    Fecha: string;
    Inicio: string;
    Fin: string;
    usuario: UsuarioDetail;
    espacio: EspacioDetail;
    created_at: string;
}