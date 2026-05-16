import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { AsociadoCreateDTO, AsociadoDTO, AsociadoEstadoDTO, AsociadoImagenDTO, AsociadoUpdateDTO } from "../dtos/asociado.dto";
import type { Asociado } from "../../domain/model/asociado.model";
import type { AsociadoEstadoInput, AsociadoImagenInput, CreateAsociadoInput, UpdateAsociadoInput } from "../../application/contracts/asociado.input";

export function asociadoDtoToDomain(dto: AsociadoDTO): Asociado {
    return {
        id: dto.id,
        imagen: dto.imagen,
        nombre: dto.Nombre,
        apellidos: dto.Apellidos,
        correo: dto.Correo,
        telefono: dto.Telefono,
        fechaNacimiento: dto.FechaNacimiento,
        lugarNacimiento: dto.LugarNacimiento,
        tipoDocumento: dto.TipoDocumento,
        documento: dto.Documento,
        sexo: dto.Sexo,
        codigo: dto.Codigo,
        direccionResidencia: dto.DireccionResidencia,
        ciudadResidencia: dto.CiudadResidencia,
        tiempoResidencia: dto.TiempoResidencia,
        estadoCivil: dto.EstadoCivil,
        profesion: dto.Profesion,
        trabajo: dto.Trabajo,
        cargo: dto.Cargo,
        tiempoServicio: dto.TiempoServicio,
        telOficina: dto.TelOficina,
        direccionOficina: dto.DireccionOficina,
        ciudadOficina: dto.CiudadOficina,
        estado: dto.Estado,
        userId: dto.user_id,
        familiaresCount: dto.familiares_count,
    };
}

export function asociadoInputToCreateDto(payload: CreateAsociadoInput): AsociadoCreateDTO {
    return {
        Nombre: safeTrim(payload.nombre),
        Apellidos: safeTrim(payload.apellidos),
        Codigo: safeTrim(payload.codigo),
        TipoDocumento: safeTrim(payload.tipoDocumento),
        Documento: safeTrim(payload.documento),
        Correo: safeTrim(payload.correo),
        Telefono: safeTrim(payload.telefono),
        FechaNacimiento: safeTrim(payload.fechaNacimiento),
        LugarNacimiento: safeTrim(payload.lugarNacimiento),
        Sexo: safeTrim(payload.sexo),
        DireccionResidencia: safeTrim(payload.direccionResidencia),
        CiudadResidencia: safeTrim(payload.ciudadResidencia),
        TiempoResidencia: safeTrim(payload.tiempoResidencia),
        EstadoCivil: safeTrim(payload.estadoCivil),
        Profesion: safeTrim(payload.profesion),
        Trabajo: safeTrim(payload.trabajo),
        Cargo: safeTrim(payload.cargo),
        TiempoServicio: safeTrim(payload.tiempoServicio),
        TelOficina: safeTrim(payload.telOficina),
        DireccionOficina: safeTrim(payload.direccionOficina),
        CiudadOficina: safeTrim(payload.ciudadOficina),
        Estado: payload.estado,
    };
}

export function asociadoInputToUpdateDto(payload: UpdateAsociadoInput): AsociadoUpdateDTO {
    return {
        id: payload.id,
        Nombre: safeTrim(payload.nombre),
        Apellidos: safeTrim(payload.apellidos),
        Codigo: safeTrim(payload.codigo),
        TipoDocumento: safeTrim(payload.tipoDocumento),
        Documento: safeTrim(payload.documento),
        Correo: safeTrim(payload.correo),
        Telefono: safeTrim(payload.telefono),
        FechaNacimiento: safeTrim(payload.fechaNacimiento),
        LugarNacimiento: safeTrim(payload.lugarNacimiento),
        Sexo: safeTrim(payload.sexo),
        DireccionResidencia: safeTrim(payload.direccionResidencia),
        CiudadResidencia: safeTrim(payload.ciudadResidencia),
        TiempoResidencia: safeTrim(payload.tiempoResidencia),
        EstadoCivil: safeTrim(payload.estadoCivil),
        Profesion: safeTrim(payload.profesion),
        Trabajo: safeTrim(payload.trabajo),
        Cargo: safeTrim(payload.cargo),
        TiempoServicio: safeTrim(payload.tiempoServicio),
        TelOficina: safeTrim(payload.telOficina),
        DireccionOficina: safeTrim(payload.direccionOficina),
        CiudadOficina: safeTrim(payload.ciudadOficina),
        Estado: payload.estado,
        user_id: payload.userId
    };
}

export function asociadoInputToEstadoDto(payload: AsociadoEstadoInput): AsociadoEstadoDTO {
    return {
        id: payload.id,
        Estado: payload.estado,
        Motivo: payload.motivo,
    };
}

export function asociadoInputToImagenDto(payload: AsociadoImagenInput): AsociadoImagenDTO {
    const formData = new FormData();
    if (payload.imagen) formData.append("imagen", payload.imagen);
    return formData;
}