import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export type InvitacionDTO = {
    id: number;
    Nombre: string;
    Apellidos: string;
    Telefono: string;
    TipoDocumento: string;
    Documento: string;
    Status: boolean;
    usuario: UsuarioDetail;
    created_at: string;
}