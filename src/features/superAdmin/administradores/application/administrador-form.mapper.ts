import type { AdministradorPasswordPayload, AdministradorPayload } from "../domain/administrador.model";
import type { AdministradorForm, AdministradorPasswordForm } from "../presentation/types/admin";

export function administradorFormToPayload(form: AdministradorForm, id?: number): AdministradorPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}

export function administradorPasswordToPayload(form: AdministradorPasswordForm): AdministradorPasswordPayload {
    if (form.id == null) throw new Error("Administrador id es requerido");
    return {
        id: form.id,
        password: form.password,
    };
}