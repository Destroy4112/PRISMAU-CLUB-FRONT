import type { MenuInput } from "../../application/contracts/menu.input";
import type { Menu } from "../../domain/model/menu.model";
import type { MenuForm } from "../../presentation/types/menu";

export function menuFormToPayload(form: MenuForm, id?: number): MenuInput {
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