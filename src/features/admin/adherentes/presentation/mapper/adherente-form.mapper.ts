import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { AdherenteEstadoInput, AdherenteImagenInput, CreateAdherenteInput, UpdateAdherenteInput } from "../../application/contracts/adherente.input";
import type { Adherente } from "../../domain/model/adherente.model";
import type { AdherenteEstadoForm, AdherenteForm, AdherenteImagenForm } from "../types/adherente";

export function adherenteFormToCreateInput(form: AdherenteForm): CreateAdherenteInput {
   return {
      ...form,
   };
}

export function adherenteFormToUpdateInput(form: AdherenteForm, id: number): UpdateAdherenteInput {
   return {
      id,
      ...form,
   };
}

export function adherenteEstadoFormToInput(form: AdherenteEstadoForm): AdherenteEstadoInput {
   return {
      ...form
   };
}

export function adherenteImagenFormToInput(form: AdherenteImagenForm): AdherenteImagenInput {
   if (form.id == null) throw new Error("El id del adherente es requerido.");
   return {
      id: form.id,
      imagen: form.imagen!,
   };
}

export function adherenteDomainToForm(payload: Adherente): AdherenteForm {
   return {
      asociadoId: payload.asociadoId,
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