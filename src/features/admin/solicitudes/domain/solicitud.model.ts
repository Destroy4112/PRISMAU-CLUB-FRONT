import type { UsuarioDetail } from "@shared/domain/usuario-detail.model";

export type SolicitudId = number;

export interface Solicitud {
    id: SolicitudId;
    Descripcion: string;
    Tipo: string;
    user_id: number;
    Respuesta: string;
    Estado: number;
    usuario: UsuarioDetail;
    createdAt?: string;
    updatedAt?: string;
}

export interface SolicitudRespuestaPayload {
    id: SolicitudId;
    Respuesta: string;
}