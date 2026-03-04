import type { Menu, MenuPayload } from "../domain/menu.model";
import type { MenuCreateDTO, MenuDTO, MenuUpdateDTO } from "./menu.dto";

export function menuDtoToDomain(dto: MenuDTO): Menu {
    return {
        id: dto.id,
        Name: dto.Name,
        Type: dto.Type,
        Route: dto.Route,
        Icon: dto.Icon,
        Color: dto.Color,
        Estado: dto.Estado,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}

export function payloadToCreateDto(payload: MenuPayload): MenuCreateDTO {
    return {
        Name: payload.Name.trim(),
        Type: payload.Type.trim(),
        Route: payload.Route.trim(),
        Icon: payload.Icon.trim(),
        Color: payload.Color.trim(),
    };
}

export function payloadToUpdateDto(payload: MenuPayload): MenuUpdateDTO {
    return {
        id: payload.id!,
        Name: payload.Name.trim(),
        Type: payload.Type.trim(),
        Route: payload.Route.trim(),
        Icon: payload.Icon.trim(),
        Color: payload.Color.trim(),
        Estado: payload.Estado,
    };
}