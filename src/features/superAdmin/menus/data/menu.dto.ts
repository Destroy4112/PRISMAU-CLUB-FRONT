import type { MenuId } from "../domain/menu.model";

export type MenuDTO = {
    id: MenuId;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
    Estado: number;
    created_at?: string;
    updated_at?: string;
}

export interface MenuCreateDTO {
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
}

export interface MenuUpdateDTO {
    id: MenuId;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
    Estado: number;
}