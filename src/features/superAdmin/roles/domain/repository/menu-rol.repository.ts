import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRole } from "../model/menu-role.model";
import type { MenuRolPayload } from "../payload/menu-rol.payload";

export interface MenuRolRepository {
    getByRol(id: number): Promise<MenuRole[]>;
    create(rubro: MenuRolPayload): Promise<ApiResponseVoid>;
    delete(id: number): Promise<ApiResponseVoid>;
}