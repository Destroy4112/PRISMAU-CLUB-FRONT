import type { MenuRol, MenuRole, MenuRolPayload } from "../domain/menu-rol.model";
import type { MenuRolCreateDTO, MenuRolDTO, MenuRoleDTO } from "./menu-rol.dto";

export function menuRolDtoToDomain(dto: MenuRolDTO): MenuRol {
    return {
        id: dto.id,
        menu_id: dto.menu_id,
        role_id: dto.role_id,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}

export function payloadToCreateDto(payload: MenuRolPayload): MenuRolCreateDTO {
    return {
        menu_id: payload.menu_id,
        role_id: payload.role_id,
    };
}

export function menuRoleDtoToDomain(dto: MenuRoleDTO): MenuRole {
    return {
        id: dto.id,
        Name: dto.Name,
        Type: dto.Type,
        Route: dto.Route,
        Icon: dto.Icon,
        Color: dto.Color,
        Estado: dto.Estado,
        menuRolId: dto.menuRolId,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}