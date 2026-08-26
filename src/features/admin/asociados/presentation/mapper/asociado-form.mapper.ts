import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { AsociadoEstadoInput, AsociadoImagenInput, CreateAsociadoInput, UpdateAsociadoInput } from "../../application/contracts/asociado.input";
import type { Asociado } from "../../domain/model/asociado.model";
import type { AsociadoEstadoForm, AsociadoForm, AsociadoImagenForm } from "../types/asociado";

export function asociadoFormToCreateInput(form: AsociadoForm): CreateAsociadoInput {
   return {
      ...form,
   };
}

export function asociadoFormToUpdateInput(form: AsociadoForm, id: number): UpdateAsociadoInput {
   return {
      id,
      ...form,
   };
}

export function asociadoEstadoFormToInput(form: AsociadoEstadoForm): AsociadoEstadoInput {
   return {
      ...form
   };
}

export function asociadoImagenFormToInput(form: AsociadoImagenForm): AsociadoImagenInput {
   if (form.id == null) throw new Error("El id del asociado es requerido.");
   return {
      id: form.id,
      imagen: form.imagen!,
   };
}

export function asociadoDomainToForm(payload: Asociado): AsociadoForm {
   return {
      nombre: payload.nombre,
      apellidos: payload.apellidos,
      tipoDocumento: payload.tipoDocumento,
      documento: payload.documento,
      correo: payload.correo,
      telefono: payload.telefono,
      sexo: payload.sexo,
      codigo: safeTrim(payload.codigo),
      fechaNacimiento: safeTrim(payload.fechaNacimiento),
      lugarNacimiento: safeTrim(payload.lugarNacimiento),
      direccionResidencia: safeTrim(payload.direccionResidencia),
      ciudadResidencia: safeTrim(payload.ciudadResidencia),
      tiempoResidencia: safeTrim(payload.tiempoResidencia),
      estadoCivil: safeTrim(payload.estadoCivil),
      profesion: safeTrim(payload.profesion),
      trabajo: safeTrim(payload.trabajo),
      cargo: safeTrim(payload.cargo),
      tiempoServicio: safeTrim(payload.tiempoServicio),
      telOficina: safeTrim(payload.telOficina),
      direccionOficina: safeTrim(payload.direccionOficina),
      ciudadOficina: safeTrim(payload.ciudadOficina),
      estado: payload.estado,
   };
}