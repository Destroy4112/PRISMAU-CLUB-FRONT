import type { UserPasswordPayload } from "@features/users/application/contracts/user-password.payload";
import type { AdministradorInput } from "../../application/contracts/administrador.input";
import type { Administrador } from "../../domain/models/administrador.model";
import type { AdministradorForm, AdministradorPasswordForm } from "../types/admin";

export function administradorFormToPayload(form: AdministradorForm, id?: number): AdministradorInput {
   return {
      ...(id != null ? { id } : {}),
      ...form,
   };
}

export function administradorDomainToForm(payload: Administrador): AdministradorForm {
   return {
      ...payload,
   }
}

export function administradorPasswordFormToPayload(form: AdministradorPasswordForm): UserPasswordPayload {
   if (form.id == null) throw new Error("Administrador id es requerido");
   return {
      id: form.id,
      password: form.password,
   };
}