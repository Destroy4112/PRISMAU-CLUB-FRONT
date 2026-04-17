import type { Menu } from "../../domain/model/menu.model";
import type { MenuPayload } from "../../domain/payload/menu.payload";
import type { MenuForm } from "../../presentation/types/menu";

export function menuFormToPayload(form: MenuForm, id?: number): MenuPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}

export function menuDomainToForm(payload: Menu): MenuForm {
    return {
        ...payload,
    };
}