import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { AdherenteCreateDTO, AdherenteDTO, AdherenteEstadoDTO, AdherenteImagenDTO, AdherenteUpdateDTO } from "../dtos/adherente.dto";
import type { Adherente } from "../../domain/model/adherente.model";
import type { AdherenteEstadoInput, AdherenteImagenInput, CreateAdherenteInput, UpdateAdherenteInput } from "../../application/contracts/adherente.input";

export function adherenteDtoToDomain(dto: AdherenteDTO): Adherente {
    return {
        id: dto.id,
        imagen: dto.imagen,
        asociadoId: dto.asociado_id,
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

export function adherenteInputToCreateDto(payload: CreateAdherenteInput): AdherenteCreateDTO {
    return {
        asociado_id: payload.asociadoId,
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

export function adherenteInputToUpdateDto(payload: UpdateAdherenteInput): AdherenteUpdateDTO {
    return {
        id: payload.id,
        asociado_id: payload.asociadoId,
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
        user_id: payload.userId};
}

export function adherenteInputToEstadoDto(payload: AdherenteEstadoInput): AdherenteEstadoDTO {
    return {
        id: payload.id,
        Estado: payload.estado,
        Motivo: payload.motivo,
    };
}

export function adherenteInputToImagenDto(payload: AdherenteImagenInput): AdherenteImagenDTO {
    const formData = new FormData();
    if (payload.imagen) formData.append("imagen", payload.imagen);
    return formData;
}