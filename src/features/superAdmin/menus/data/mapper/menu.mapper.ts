import type { Menu } from "../../domain/model/menu.model";
import type { MenuPayload } from "../../domain/payload/menu.payload";
import type { MenuCreateDTO, MenuDTO, MenuUpdateDTO } from "../dto/menu.dto";

export function menuDtoToDomain(dto: MenuDTO): Menu {
    return {
        id: dto.id,
        name: dto.Name,
        type: dto.Type,
        route: dto.Route,
        icon: dto.Icon,
        color: dto.Color,
        estado: dto.Estado,
    };
}

export function menuPayloadToCreateDto(payload: MenuPayload): MenuCreateDTO {
    return {
        Name: payload.name,
        Type: payload.type,
        Route: payload.route,
        Icon: payload.icon,
        Color: payload.color,
    };
}

export function menuPayloadToUpdateDto(payload: MenuPayload): MenuUpdateDTO {
    return {
        id: payload.id!,
        Name: payload.name,
        Type: payload.type,
        Route: payload.route,
        Icon: payload.icon,
        Color: payload.color,
        Estado: payload.estado!,
    };
}