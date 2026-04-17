import type { UserPasswordPayload } from "@features/users/domain/payloads/user-password.payload";
import type { Administrador } from "../../domain/models/administrador.model";
import type { AdministradorPayload } from "../../domain/payloads/administrador.payload";
import type { AdministradorForm, AdministradorPasswordForm } from "../../presentation/types/admin";

export function administradorFormToPayload(form: AdministradorForm, id?: number): AdministradorPayload {
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