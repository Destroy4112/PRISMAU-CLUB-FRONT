import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { Asociado, AsociadoEstadoPayload, AsociadoImagenPayload, AsociadoPayload } from "../domain/asociado.model";
import type { AsociadoCreateDTO, AsociadoDTO, AsociadoEstadoDTO, AsociadoImagenDTO, AsociadoUpdateDTO } from "./asociado.dto";

export function asociadoDtoToDomain(dto: AsociadoDTO): Asociado {
    return {
        id: dto.id,
        imagen: dto.imagen,
        Nombre: dto.Nombre,
        Apellidos: dto.Apellidos,
        Correo: dto.Correo,
        Telefono: dto.Telefono,
        FechaNacimiento: dto.FechaNacimiento,
        LugarNacimiento: dto.LugarNacimiento,
        TipoDocumento: dto.TipoDocumento,
        Documento: dto.Documento,
        Sexo: dto.Sexo,
        Codigo: dto.Codigo,
        DireccionResidencia: dto.DireccionResidencia,
        CiudadResidencia: dto.CiudadResidencia,
        TiempoResidencia: dto.TiempoResidencia,
        EstadoCivil: dto.EstadoCivil,
        Profesion: dto.Profesion,
        Trabajo: dto.Trabajo,
        Cargo: dto.Cargo,
        TiempoServicio: dto.TiempoServicio,
        TelOficina: dto.TelOficina,
        DireccionOficina: dto.DireccionOficina,
        CiudadOficina: dto.CiudadOficina,
        Estado: dto.Estado,
        user_id: dto.user_id,
        familiares_count: dto.familiares_count,
        created_at: dto.created_at,
        updated_at: dto.updated_at,
    };
}

export function payloadToCreateDto(payload: AsociadoPayload): AsociadoCreateDTO {
    return {
        Nombre: safeTrim(payload.Nombre),
        Apellidos: safeTrim(payload.Apellidos),
        Codigo: safeTrim(payload.Codigo),
        TipoDocumento: safeTrim(payload.TipoDocumento),
        Documento: safeTrim(payload.Documento),
        Correo: safeTrim(payload.Correo),
        Telefono: safeTrim(payload.Telefono),
        FechaNacimiento: safeTrim(payload.FechaNacimiento),
        LugarNacimiento: safeTrim(payload.LugarNacimiento),
        Sexo: safeTrim(payload.Sexo),
        DireccionResidencia: safeTrim(payload.DireccionResidencia),
        CiudadResidencia: safeTrim(payload.CiudadResidencia),
        TiempoResidencia: safeTrim(payload.TiempoResidencia),
        EstadoCivil: safeTrim(payload.EstadoCivil),
        Profesion: safeTrim(payload.Profesion),
        Trabajo: safeTrim(payload.Trabajo),
        Cargo: safeTrim(payload.Cargo),
        TiempoServicio: safeTrim(payload.TiempoServicio),
        TelOficina: safeTrim(payload.TelOficina),
        DireccionOficina: safeTrim(payload.DireccionOficina),
        CiudadOficina: safeTrim(payload.CiudadOficina),
        Estado: payload.Estado,
    };
}

export function payloadToUpdateDto(payload: AsociadoPayload): AsociadoUpdateDTO {
    return {
        id: payload.id!,
        Nombre: safeTrim(payload.Nombre),
        Apellidos: safeTrim(payload.Apellidos),
        Codigo: safeTrim(payload.Codigo),
        TipoDocumento: safeTrim(payload.TipoDocumento),
        Documento: safeTrim(payload.Documento),
        Correo: safeTrim(payload.Correo),
        Telefono: safeTrim(payload.Telefono),
        FechaNacimiento: safeTrim(payload.FechaNacimiento),
        LugarNacimiento: safeTrim(payload.LugarNacimiento),
        Sexo: safeTrim(payload.Sexo),
        DireccionResidencia: safeTrim(payload.DireccionResidencia),
        CiudadResidencia: safeTrim(payload.CiudadResidencia),
        TiempoResidencia: safeTrim(payload.TiempoResidencia),
        EstadoCivil: safeTrim(payload.EstadoCivil),
        Profesion: safeTrim(payload.Profesion),
        Trabajo: safeTrim(payload.Trabajo),
        Cargo: safeTrim(payload.Cargo),
        TiempoServicio: safeTrim(payload.TiempoServicio),
        TelOficina: safeTrim(payload.TelOficina),
        DireccionOficina: safeTrim(payload.DireccionOficina),
        CiudadOficina: safeTrim(payload.CiudadOficina),
        Estado: payload.Estado,
    };
}

export function payloadToEstadoDto(payload: AsociadoEstadoPayload): AsociadoEstadoDTO {
    return {
        id: payload.id,
        Estado: payload.Estado,
        Motivo: payload.Motivo.trim(),
    };
}

export function payloadToImagenDto(payload: AsociadoImagenPayload): AsociadoImagenDTO {
    const formData = new FormData();
    if (payload.imagen) formData.append("imagen", payload.imagen);
    return formData;
}