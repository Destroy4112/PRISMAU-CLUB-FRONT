import type { AdministradorInput } from "../../application/contracts/administrador.input";
import type { Administrador } from "../../domain/models/administrador.model";
import type { AdministradorCreateDTO, AdministradorDTO, AdministradorUpdateDTO } from "../dtos/administrador.dto";

export function administradorDtoToDomain(dto: AdministradorDTO): Administrador {
    return {
        id: dto.id,
        nombre: dto.Nombre,
        apellidos: dto.Apellidos,
        correo: dto.Correo,
        telefono: dto.Telefono,
        user: { id: dto.user.id, documento: dto.user.Documento, rol: dto.user.Rol },
        userId: dto.user_id,
        estado: dto.Estado,
    };
}

export function payloadToCreateDto(payload: AdministradorInput): AdministradorCreateDTO {
    return {
        Nombre: payload.nombre,
        Apellidos: payload.apellidos,
        Correo: payload.correo,
        Telefono: payload.telefono,
        user: { Documento: payload.user.documento, password: payload.user.password }
    };
}

export function payloadToUpdateDto(payload: AdministradorInput): AdministradorUpdateDTO {
    return {
        id: payload.id!,
        user_id: payload.userId!,
        Nombre: payload.nombre,
        Apellidos: payload.apellidos,
        Correo: payload.correo,
        Telefono: payload.telefono,
        user: { Documento: payload.user.documento },
        Estado: payload.estado!,
    };
}