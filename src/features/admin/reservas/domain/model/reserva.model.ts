import type { EspacioDetail } from "@shared/models/espacio-detail.model";
import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export type ReservaId = number;

export interface Reserva {
   id: ReservaId;
   userId: number;
   espacioId: number;
   fecha: string;
   inicio: string;
   fin: string;
   usuario: UsuarioDetail
   espacio: EspacioDetail
   createdAt: string;
}