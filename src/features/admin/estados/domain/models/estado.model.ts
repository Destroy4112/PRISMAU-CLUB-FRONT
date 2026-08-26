import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export interface Estado {
   id: number;
   usuario: UsuarioDetail;
   estado: string;
   motivo: string;
   createdAt: string;
}