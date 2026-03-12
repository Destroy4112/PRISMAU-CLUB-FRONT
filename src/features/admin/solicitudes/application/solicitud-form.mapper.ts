import type { SolicitudRespuestaPayload } from "../domain/solicitud.model";
import type { SolicitudReplyForm } from "../presentation/types/solicitud";

export function solicitudFormToPayload(form: SolicitudReplyForm): SolicitudRespuestaPayload {
    return {
        id: form.id,
        Respuesta: form.Respuesta
    };
}