import { emptyToNull } from "@shared/utilities/convertidores/normalizeText";
import type { Familiar, FamiliarImagenPayload, FamiliarPayload } from "../domain/familiar.model";
import type { FamiliarCreateDTO, FamiliarDTO, FamiliarImagenDTO, FamiliarUpdateDTO } from "./familiar.dto";

export const familiarDtoToDomain = (dto: FamiliarDTO): Familiar => ({
    id: dto.id,
    imagen: emptyToNull(dto.imagen),
    user_id: dto.user_id,
    asociado_id: dto.asociado_id ?? null,
    adherente_id: dto.adherente_id ?? null,
    Nombre: dto.Nombre,
    Apellidos: dto.Apellidos,
    Correo: emptyToNull(dto.Correo),
    Telefono: emptyToNull(dto.Telefono),
    FechaNacimiento: emptyToNull(dto.FechaNacimiento),
    LugarNacimiento: emptyToNull(dto.LugarNacimiento),
    TipoDocumento: dto.TipoDocumento,
    Documento: dto.Documento,
    Sexo: dto.Sexo,
    Codigo: dto.Codigo,
    DireccionResidencia: emptyToNull(dto.DireccionResidencia),
    CiudadResidencia: emptyToNull(dto.CiudadResidencia),
    EstadoCivil: emptyToNull(dto.EstadoCivil),
    Cargo: emptyToNull(dto.Cargo),
    Parentesco: dto.Parentesco,
    Estado: dto.Estado,
    created_at: new Date(dto.created_at),
    updated_at: new Date(dto.updated_at),
});

export function payloadToCreateDto(payload: FamiliarPayload): FamiliarCreateDTO {
    return {
        asociado_id: payload.asociado_id ?? null,
        adherente_id: payload.adherente_id ?? null,
        Nombre: payload.Nombre,
        Apellidos: payload.Apellidos,
        TipoDocumento: payload.TipoDocumento,
        Documento: payload.Documento,
        Codigo: emptyToNull(payload.Codigo),
        Correo: emptyToNull(payload.Correo),
        Telefono: emptyToNull(payload.Telefono),
        FechaNacimiento: emptyToNull(payload.FechaNacimiento),
        LugarNacimiento: emptyToNull(payload.LugarNacimiento),
        Sexo: payload.Sexo,
        EstadoCivil: emptyToNull(payload.EstadoCivil),
        DireccionResidencia: emptyToNull(payload.DireccionResidencia),
        CiudadResidencia: emptyToNull(payload.CiudadResidencia),
        Cargo: emptyToNull(payload.Cargo),
        Parentesco: payload.Parentesco,
        Estado: payload.Estado,
    };
}

export function payloadToUpdateDto(payload: FamiliarPayload): FamiliarUpdateDTO {
    if (!payload.id) throw new Error("El id es obligatorio para actualizar un familiar");

    return {
        id: payload.id,
        Nombre: payload.Nombre,
        Apellidos: payload.Apellidos,
        TipoDocumento: payload.TipoDocumento,
        Documento: payload.Documento,
        Correo: emptyToNull(payload.Correo),
        Telefono: emptyToNull(payload.Telefono),
        FechaNacimiento: emptyToNull(payload.FechaNacimiento),
        LugarNacimiento: emptyToNull(payload.LugarNacimiento),
        Sexo: payload.Sexo,
        EstadoCivil: emptyToNull(payload.EstadoCivil),
        DireccionResidencia: emptyToNull(payload.DireccionResidencia),
        CiudadResidencia: emptyToNull(payload.CiudadResidencia),
        Cargo: emptyToNull(payload.Cargo),
        Parentesco: payload.Parentesco,
        Estado: payload.Estado,
    };
}

export function payloadToImagenDto(payload: FamiliarImagenPayload): FamiliarImagenDTO {
    const formData = new FormData();
    if (payload.imagen) formData.append("imagen", payload.imagen);
    return formData;
}