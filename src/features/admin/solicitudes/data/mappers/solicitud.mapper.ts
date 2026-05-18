import { emptyToNull } from "@shared/utilities/convertidores/normalizeText";
import type { SolicitudRespuestaInput } from "../../application/contracts/solicitud.input";
import type { Solicitud } from "../../domain/models/solicitud.model";
import type { SolicitudDTO, SolicitudRespuestaDTO } from "../dto/solicitud.dto";

export function solicitudDtoToDomain(dto: SolicitudDTO): Solicitud {
    return {
        id: dto.id,
        descripcion: dto.Descripcion,
        tipo: dto.Tipo,
        userId: dto.user_id,
        respuesta: emptyToNull(dto.Respuesta),
        estado: dto.Estado,
        usuario: dto.usuario,
        createdAt: dto.created_at,
    };
}

export function payloadToReplyDto(payload: SolicitudRespuestaInput): SolicitudRespuestaDTO {
    return {
        id: payload.id,
        Respuesta: payload.respuesta
    }
}