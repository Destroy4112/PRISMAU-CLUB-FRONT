import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export interface Acceso {
   id: number;
   usuario: UsuarioDetail;
   createdAt: string;
}
