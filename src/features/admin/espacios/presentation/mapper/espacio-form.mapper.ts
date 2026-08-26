import type { CreateEspacioInput, UpdateEspacioInput } from "../../application/contracts/espacio.input";
import type { Espacio } from "../../domain/model/espacio.model";
import type { EspacioForm } from "../types/espacio";

export function espacioFormToCreateInput(form: EspacioForm): CreateEspacioInput {
   return {
      descripcion: form.descripcion,
      imagen: form.imagen!,
      estado: form.estado,
   };
}

export function espacioFormToUpdateInput(form: EspacioForm, id: number): UpdateEspacioInput {
   return {
      id,
      descripcion: form.descripcion,
      imagen: form.imagen!,
      estado: form.estado
   };
}

export function espacioDomainToForm(payload: Espacio): EspacioForm {
   return {
      descripcion: payload.descripcion,
      imagen: null,
      imagePreview: payload.imagePreview,
      estado: payload.estado
   };
}