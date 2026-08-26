import type { MenuRole } from "../../domain/model/menu-role.model";
import type { MenuRoleDTO } from "../dto/menu-role.dto";

export function menuRoleDtoToDomain(dto: MenuRoleDTO): MenuRole {
   return {
      id: dto.id,
      name: dto.Name,
      type: dto.Type,
      route: dto.Route,
      icon: dto.Icon,
      color: dto.Color,
      estado: dto.Estado,
      menuRolId: dto.menuRolId,
   };
}