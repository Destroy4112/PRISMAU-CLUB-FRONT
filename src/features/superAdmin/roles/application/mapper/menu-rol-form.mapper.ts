import type { MenuRolPayload } from "../../domain/payload/menu-rol.payload";
import type { MenuRolContext, MenuRolForm } from "../../presentation/types/menuRol";

export function menuRolFormToPayload(form: MenuRolForm, context: MenuRolContext): MenuRolPayload {
    return {
        menuId: form.menuId,
        roleId: context.roleId
    };
} 