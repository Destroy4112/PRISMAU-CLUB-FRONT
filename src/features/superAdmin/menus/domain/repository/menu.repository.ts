import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Menu, MenuId } from "../model/menu.model";
import type { MenuInput } from "../../application/contracts/menu.input";

export interface MenuRepository {
    getAll(): Promise<Menu[]>;
    create(rubro: MenuInput): Promise<ApiResponseVoid>;
    update(rubro: MenuInput): Promise<ApiResponseVoid>;
    delete(id: MenuId): Promise<ApiResponseVoid>;
}