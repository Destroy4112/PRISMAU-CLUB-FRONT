import type { Solicitud, SolicitudRespuestaPayload } from "../domain/solicitud.model";
import type { SolicitudDTO, SolicitudRespuestaDTO } from "./solicitud.dto";

export function solicitudDtoToDomain(dto: SolicitudDTO): Solicitud {
    return {
        id: dto.id,
        Descripcion: dto.Descripcion,
        Tipo: dto.Tipo,
        user_id: dto.user_id,
        Respuesta: dto.Respuesta,
        Estado: dto.Estado,
        usuario: {
            id: dto.usuario.id,
            Nombre: dto.usuario.Nombre,
            Apellidos: dto.usuario.Apellidos,
            Correo: dto.usuario.Correo,
            Telefono: dto.usuario.Telefono,
            Documento: dto.usuario.Documento,
            imagen: dto.usuario.imagen,
            rol: dto.usuario.rol,
            Sexo: dto.usuario.Sexo,
            user_id: dto.usuario.user_id
        },
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}

export function payloadToReplyDto(payload: SolicitudRespuestaPayload): SolicitudRespuestaDTO {
    return {
        id: payload.id,
        Respuesta: payload.Respuesta
    }
}