import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRol, MenuRole, MenuRolId, MenuRolPayload } from "./menu-rol.model";

export interface MenuRolRepository {
    getByRol(id: MenuRolId): Promise<MenuRole[]>;
    create(rubro: MenuRolPayload): Promise<ApiResponse<MenuRol>>;
    delete(id: MenuRolId): Promise<ApiResponseVoid>;
}