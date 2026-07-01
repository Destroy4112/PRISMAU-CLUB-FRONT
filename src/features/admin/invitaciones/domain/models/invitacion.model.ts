import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export interface Invitacion {
    id: number;
    Nombre: string;
    Apellidos: string;
    Telefono: string;
    TipoDocumento: string;
    Documento: string;
    Status: boolean;
    usuario: UsuarioDetail;
    createdAt: string;
}
