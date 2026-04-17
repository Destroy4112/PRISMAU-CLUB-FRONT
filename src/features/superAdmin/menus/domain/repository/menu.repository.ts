import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Menu, MenuId } from "../model/menu.model";
import type { MenuPayload } from "../payload/menu.payload";

export interface MenuRepository {
    getAll(): Promise<Menu[]>;
    create(rubro: MenuPayload): Promise<ApiResponseVoid>;
    update(rubro: MenuPayload): Promise<ApiResponseVoid>;
    delete(id: MenuId): Promise<ApiResponseVoid>;
}