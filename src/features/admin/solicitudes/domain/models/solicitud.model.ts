import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export type SolicitudId = number;

export interface Solicitud {
    id: SolicitudId;
    descripcion: string;
    tipo: string;
    userId: number;
    estado: number;
    usuario: UsuarioDetail;
    respuesta: string | null;
    createdAt: string;
}