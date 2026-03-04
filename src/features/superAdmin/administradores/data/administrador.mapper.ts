import type { Administrador, AdministradorPayload } from "../domain/administrador.model";
import type { AdministradorCreateDTO, AdministradorDTO, AdministradorUpdateDTO } from "./administrador.dto";

export function administradorDtoToDomain(dto: AdministradorDTO): Administrador {
    return {
        id: dto.id,
        Nombre: dto.Nombre,
        Apellidos: dto.Apellidos,
        Correo: dto.Correo,
        Telefono: dto.Telefono,
        user: dto.user,
        user_id: dto.user_id,
        Estado: dto.Estado,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}

export function payloadToCreateDto(payload: AdministradorPayload): AdministradorCreateDTO {
    return {
        Nombre: payload.Nombre.trim(),
        Apellidos: payload.Apellidos.trim(),
        Correo: payload.Correo.trim(),
        Telefono: payload.Telefono.trim(),
        user: { Documento: payload.user.Documento.trim(), password: payload.user.password?.trim() },
    };
}

export function payloadToUpdateDto(payload: AdministradorPayload): AdministradorUpdateDTO {
    return {
        id: payload.id!,
        Nombre: payload.Nombre.trim(),
        Apellidos: payload.Apellidos.trim(),
        Correo: payload.Correo.trim(),
        Telefono: payload.Telefono.trim(),
        user: { Documento: payload.user.Documento.trim() },
        Estado: payload.Estado!,
    };
}