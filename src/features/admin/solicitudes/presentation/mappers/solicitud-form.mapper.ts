import type { Solicitud } from "../../domain/models/solicitud.model";
import type { SolicitudRespuestaInput } from "../../domain/payloads/solicitud.payload";
import type { SolicitudForm, SolicitudReplyForm } from "../types/solicitud";

export function solicitudFormToPayload(form: SolicitudReplyForm): SolicitudRespuestaInput {
    return {
        ...form
    };
}

export function solicitudDomainToForm(payload: Solicitud): SolicitudForm {
    return {
        ...payload
    };
}