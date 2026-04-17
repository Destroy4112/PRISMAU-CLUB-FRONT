import type { MenuId } from "../model/menu.model";

export interface MenuPayload {
    id?: MenuId;
    name: string;
    type: string;
    route: string;
    icon: string;
    color: string;
    estado?: number;
}