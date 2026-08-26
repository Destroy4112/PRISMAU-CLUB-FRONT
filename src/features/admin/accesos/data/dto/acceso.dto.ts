import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export type AccesoDTO = {
   id: number;
   usuario: UsuarioDetail;
   created_at: string;
}