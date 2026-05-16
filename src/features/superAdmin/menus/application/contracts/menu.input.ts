import type { MenuId } from "../../domain/model/menu.model";

export interface MenuInput {
    id?: MenuId;
    name: string;
    type: string;
    route: string;
    icon: string;
    color: string;
    estado?: number;
}