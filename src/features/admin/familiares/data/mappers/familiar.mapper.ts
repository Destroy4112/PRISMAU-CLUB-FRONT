import type { CreateFamiliarInput, FamiliarImagenInput, UpdateFamiliarInput } from "../../application/contracts/familiar.input";
import type { Familiar } from "../../domain/model/familiar.model";
import type { CreateFamiliarDTO, FamiliarDTO, FamiliarImagenDTO, UpdateFamiliarDTO } from "../dtos/familiar.dto";

export const familiarDtoToDomain = (dto: FamiliarDTO): Familiar => ({
   id: dto.id,
   imagen: dto.imagen,
   user_id: dto.user_id,
   asociado_id: dto.asociado_id,
   adherente_id: dto.adherente_id,
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
   EstadoCivil: dto.EstadoCivil,
   Cargo: dto.Cargo,
   Parentesco: dto.Parentesco,
   Estado: dto.Estado,
});

export function familiarInputToCreateDto(payload: CreateFamiliarInput): CreateFamiliarDTO {
   return {
      asociado_id: payload.asociado_id,
      adherente_id: payload.adherente_id,
      Nombre: payload.Nombre,
      Apellidos: payload.Apellidos,
      TipoDocumento: payload.TipoDocumento,
      Documento: payload.Documento,
      Codigo: payload.Codigo,
      Correo: payload.Correo,
      Telefono: payload.Telefono,
      FechaNacimiento: payload.FechaNacimiento,
      LugarNacimiento: payload.LugarNacimiento,
      Sexo: payload.Sexo,
      EstadoCivil: payload.EstadoCivil,
      DireccionResidencia: payload.DireccionResidencia,
      CiudadResidencia: payload.CiudadResidencia,
      Cargo: payload.Cargo,
      Parentesco: payload.Parentesco,
      Estado: payload.Estado,
   };
}

export function familiarInputToUpdateDto(payload: UpdateFamiliarInput): UpdateFamiliarDTO {
   if (!payload.id) throw new Error("El id es obligatorio para actualizar un familiar");

   return {
      id: payload.id,
      asociado_id: payload.asociado_id,
      adherente_id: payload.adherente_id,
      Codigo: payload.Codigo,
      user_id: payload.userId,
      Nombre: payload.Nombre,
      Apellidos: payload.Apellidos,
      TipoDocumento: payload.TipoDocumento,
      Documento: payload.Documento,
      Correo: payload.Correo,
      Telefono: payload.Telefono,
      FechaNacimiento: payload.FechaNacimiento,
      LugarNacimiento: payload.LugarNacimiento,
      Sexo: payload.Sexo,
      EstadoCivil: payload.EstadoCivil,
      DireccionResidencia: payload.DireccionResidencia,
      CiudadResidencia: payload.CiudadResidencia,
      Cargo: payload.Cargo,
      Parentesco: payload.Parentesco,
      Estado: payload.Estado,
   };
}

export function familiarInputToImagenDto(payload: FamiliarImagenInput): FamiliarImagenDTO {
   const formData = new FormData();
   if (payload.imagen) formData.append("imagen", payload.imagen);
   return formData;
}