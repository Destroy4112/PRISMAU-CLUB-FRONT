import type { MenuRolId } from "../domain/menu-rol.model";

export type MenuRolDTO = {
    id: MenuRolId;
    menu_id: number;
    role_id: number;
    created_at?: string;
    updated_at?: string;
}

export interface MenuRolCreateDTO {
    menu_id: number;
    role_id: number;
}

export interface MenuRoleDTO {
    id: MenuRolId;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
    Estado: string;
    menuRolId: number;
    created_at?: string;
    updated_at?: string;
}