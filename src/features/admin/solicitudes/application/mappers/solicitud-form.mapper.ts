import type { Solicitud } from "../../domain/models/solicitud.model";
import type { SolicitudRespuestaPayload } from "../../domain/payloads/solicitud.payload";
import type { SolicitudForm, SolicitudReplyForm } from "../../presentation/types/solicitud";

export function solicitudFormToPayload(form: SolicitudReplyForm): SolicitudRespuestaPayload {
    return {
        ...form
    };
}

export function solicitudDomainToForm(payload: Solicitud): SolicitudForm {
    return {
        ...payload
    };
}