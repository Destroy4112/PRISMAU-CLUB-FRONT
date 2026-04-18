import type { UsuarioDetail } from "@shared/models/usuario-detail.model";
import type { SolicitudId } from "../../domain/models/solicitud.model";

export type SolicitudDTO = {
    id: SolicitudId;
    Descripcion: string;
    Tipo: string;
    user_id: number;
    Estado: number;
    usuario: UsuarioDetail;
    Respuesta: string | null;
    created_at: string;
};

export interface SolicitudRespuestaDTO {
    id: SolicitudId;
    Respuesta: string;
}