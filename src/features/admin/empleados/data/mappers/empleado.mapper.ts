import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { CreateEmpleadoInput, EmpleadoImagenInput, UpdateEmpleadoInput } from "../../application/contracts/empleado.input";
import type { Empleado } from "../../domain/model/empleado.model";
import type { EmpleadoCreateDTO, EmpleadoDTO, EmpleadoImagenDTO, EmpleadoUpdateDTO } from "../dtos/empleado.dto";

export function empleadoDtoToDomain(dto: EmpleadoDTO): Empleado {
   return {
      id: dto.id,
      userId: dto.user_id,
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
      direccionResidencia: dto.DireccionResidencia,
      ciudadResidencia: dto.CiudadResidencia,
      estadoCivil: dto.EstadoCivil,
      cargo: dto.Cargo,
      estado: dto.Estado,
      rol: dto.Rol
   };
}

export function empleadoInputToCreateDto(payload: CreateEmpleadoInput): EmpleadoCreateDTO {
   return {
      Nombre: safeTrim(payload.nombre),
      Apellidos: safeTrim(payload.apellidos),
      TipoDocumento: safeTrim(payload.tipoDocumento),
      Documento: safeTrim(payload.documento),
      Correo: safeTrim(payload.correo),
      Telefono: safeTrim(payload.telefono),
      FechaNacimiento: safeTrim(payload.fechaNacimiento),
      LugarNacimiento: safeTrim(payload.lugarNacimiento),
      Sexo: safeTrim(payload.sexo),
      DireccionResidencia: safeTrim(payload.direccionResidencia),
      CiudadResidencia: safeTrim(payload.ciudadResidencia),
      EstadoCivil: safeTrim(payload.estadoCivil),
      Cargo: safeTrim(payload.cargo),
      Estado: payload.estado,
      Rol: payload.rol
   };
}

export function empleadoInputToUpdateDto(payload: UpdateEmpleadoInput): EmpleadoUpdateDTO {
   return {
      id: payload.id,
      user_id: payload.userId,
      Nombre: safeTrim(payload.nombre),
      Apellidos: safeTrim(payload.apellidos),
      TipoDocumento: safeTrim(payload.tipoDocumento),
      Documento: safeTrim(payload.documento),
      Correo: safeTrim(payload.correo),
      Telefono: safeTrim(payload.telefono),
      FechaNacimiento: safeTrim(payload.fechaNacimiento),
      LugarNacimiento: safeTrim(payload.lugarNacimiento),
      Sexo: safeTrim(payload.sexo),
      DireccionResidencia: safeTrim(payload.direccionResidencia),
      CiudadResidencia: safeTrim(payload.ciudadResidencia),
      EstadoCivil: safeTrim(payload.estadoCivil),
      Cargo: safeTrim(payload.cargo),
      Estado: payload.estado,
      Rol: payload.rol
   };
}

export function empleadoInputToImagenDto(payload: EmpleadoImagenInput): EmpleadoImagenDTO {
   const formData = new FormData();
   if (payload.imagen) formData.append("imagen", payload.imagen);
   return formData;
}