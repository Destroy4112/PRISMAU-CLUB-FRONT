import type { MenuRolInput } from "../../application/contracts/menu-rol.input";
import type { MenuRolContext, MenuRolForm } from "../../presentation/types/menuRol";

export function menuRolFormToPayload(form: MenuRolForm, context: MenuRolContext): MenuRolInput {
    return {
        menuId: form.menuId,
        roleId: context.roleId
    };
} 