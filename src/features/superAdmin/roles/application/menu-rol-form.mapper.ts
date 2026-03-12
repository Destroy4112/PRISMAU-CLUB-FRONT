import type { MenuRolPayload } from "../domain/menu-rol.model";
import type { MenuRolForm } from "../presentation/types/menuRol";

export function menuRolFormToPayload(form: MenuRolForm, id?: number): MenuRolPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}