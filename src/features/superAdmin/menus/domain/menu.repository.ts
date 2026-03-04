import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Menu, MenuId, MenuPayload } from "./menu.model";

export interface MenuRepository {
    getAll(): Promise<Menu[]>;
    create(rubro: MenuPayload): Promise<ApiResponse<Menu>>;
    update(rubro: MenuPayload): Promise<ApiResponseVoid>;
    delete(id: MenuId): Promise<ApiResponseVoid>;
}