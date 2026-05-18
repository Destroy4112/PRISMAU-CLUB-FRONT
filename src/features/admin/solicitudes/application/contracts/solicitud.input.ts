import type { SolicitudId } from "../../domain/models/solicitud.model";

export interface SolicitudRespuestaInput {
    id: SolicitudId;
    respuesta: string;
}