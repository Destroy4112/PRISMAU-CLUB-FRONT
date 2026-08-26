import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { CreateEmpleadoInput, EmpleadoImagenInput, UpdateEmpleadoInput } from "../../application/contracts/empleado.input";
import type { Empleado } from "../../domain/model/empleado.model";
import type { EmpleadoForm, EmpleadoImagenForm } from "../types/empleado";

export function empleadoFormToCreateInput(form: EmpleadoForm): CreateEmpleadoInput {
   return {
      ...form,
      rol: form.rol!
   };
}

export function empleadoFormToUpdateInput(form: EmpleadoForm, id: number): UpdateEmpleadoInput {
   return {
      id,
      ...form,
      rol: form.rol!
   };
}

export function empleadoImagenFormToInput(form: EmpleadoImagenForm): EmpleadoImagenInput {
   if (form.id == null) throw new Error("El id del empleado es requerido.");
   return {
      id: form.id,
      imagen: form.imagen!,
   };
}

export function empleadoDomainToForm(payload: Empleado): EmpleadoForm {
   return {
      nombre: payload.nombre,
      apellidos: payload.apellidos,
      tipoDocumento: payload.tipoDocumento,
      documento: payload.documento,
      correo: payload.correo,
      telefono: payload.telefono,
      sexo: payload.sexo,
      fechaNacimiento: safeTrim(payload.fechaNacimiento),
      lugarNacimiento: safeTrim(payload.lugarNacimiento),
      direccionResidencia: safeTrim(payload.direccionResidencia),
      ciudadResidencia: safeTrim(payload.ciudadResidencia),
      estadoCivil: safeTrim(payload.estadoCivil),
      cargo: safeTrim(payload.cargo),
      estado: payload.estado,
      rol: payload.rol
   };
}