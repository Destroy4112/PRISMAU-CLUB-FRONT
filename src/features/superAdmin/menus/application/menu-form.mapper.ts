import type { MenuPayload } from "../domain/menu.model";
import type { MenuForm } from "../presentation/types/menu";

export function menuFormToPayload(form: MenuForm, id?: number): MenuPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}