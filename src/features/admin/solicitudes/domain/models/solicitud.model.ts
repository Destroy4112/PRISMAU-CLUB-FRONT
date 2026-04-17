import type { UsuarioDetail } from "@shared/models/usuario-detail.model";

export type SolicitudId = number;

export interface Solicitud {
    id: SolicitudId;
    descripcion: string;
    tipo: string;
    userId: number;
    respuesta: string;
    estado: number;
    usuario: UsuarioDetail;
    createdAt: string;
}