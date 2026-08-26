import type { MenuRolInput } from "../../application/contracts/menu-rol.input";
import type { MenuRolCreateDTO } from "../dto/menu-rol.dto";

export function menuRolpayloadToCreateDto(payload: MenuRolInput): MenuRolCreateDTO {
   return {
      menu_id: payload.menuId,
      role_id: payload.roleId,
   };
}