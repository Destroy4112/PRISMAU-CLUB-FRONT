import type { MenuRolPayload } from "../../domain/payload/menu-rol.payload";
import type { MenuRolCreateDTO } from "../dto/menu-rol.dto";

export function menuRolpayloadToCreateDto(payload: MenuRolPayload): MenuRolCreateDTO {
    return {
        menu_id: payload.menuId,
        role_id: payload.roleId,
    };
}