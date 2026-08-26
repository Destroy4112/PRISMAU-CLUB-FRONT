import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRolInput } from "../../application/contracts/menu-rol.input";
import type { MenuRole } from "../model/menu-role.model";

export interface MenuRolRepository {
   getByRol(id: number): Promise<MenuRole[]>;
   create(rubro: MenuRolInput): Promise<ApiResponseVoid>;
   delete(id: number): Promise<ApiResponseVoid>;
}