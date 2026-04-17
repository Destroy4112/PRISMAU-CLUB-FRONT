import type { SolicitudId } from "../models/solicitud.model";

export interface SolicitudRespuestaPayload {
    id: SolicitudId;
    respuesta: string;
}