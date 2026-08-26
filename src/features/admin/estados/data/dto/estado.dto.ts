import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export type EstadoDTO = {
   id: number;
   Motivo: string;
   Estado: string;
   usuario: UsuarioDetail;
   created_at: string;
}