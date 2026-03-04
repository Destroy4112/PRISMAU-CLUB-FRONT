export type MenuId = number;

export interface Menu {
    id: MenuId;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
    Estado: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface MenuPayload {
    id?: MenuId;
    Name: string;
    Type: string;
    Route: string;
    Icon: string;
    Color: string;
}