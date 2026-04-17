export type MenuId = number;

export interface Menu {
    id: MenuId;
    name: string;
    type: string;
    route: string;
    icon: string;
    color: string;
    estado: number;
}