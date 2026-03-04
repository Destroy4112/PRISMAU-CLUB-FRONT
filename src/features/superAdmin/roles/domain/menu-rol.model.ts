export type MenuRolId = number;

export interface MenuRol {
    id: MenuRolId;
    menu_id: number;
    role_id: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface MenuRolPayload {
    id?: MenuRolId;
    menu_id: number;
    role_id: number;
}

export interface MenuRole {
    id: MenuRolId;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
    Estado: string;
    menuRolId: number;
    createdAt?: string;
    updatedAt?: string;
}