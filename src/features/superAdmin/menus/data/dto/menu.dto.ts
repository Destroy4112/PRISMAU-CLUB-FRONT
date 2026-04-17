import type { MenuId } from "../../domain/model/menu.model";

export type MenuBaseDTO = {
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
}

export type MenuDTO = MenuBaseDTO & {
    id: MenuId;
    Estado: number;
}

export type MenuCreateDTO = MenuBaseDTO & {
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
}

export type MenuUpdateDTO = MenuBaseDTO & {
    id: MenuId;
    Estado: number;
}