import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRol, MenuRole, MenuRolId, MenuRolPayload } from "../domain/menu-rol.model";
import type { MenuRolRepository } from "../domain/menu-rol.repository";
import type { MenuRolDTO, MenuRoleDTO } from "./menu-rol.dto";
import { menuRolDtoToDomain, menuRoleDtoToDomain, payloadToCreateDto } from "./menu-rol.mapper";

const URL = ENDPOINTS.MENU_ROL;

export class MenuRolApiRepository implements MenuRolRepository {

    async getByRol(id: number): Promise<MenuRole[]> {
        const res = await http.get<MenuRoleDTO[]>(`${URL}/${id}`);
        return res.data.map(menuRoleDtoToDomain);
    }

    async create(payload: MenuRolPayload): Promise<ApiResponse<MenuRol>> {
        const dto = payloadToCreateDto(payload);
        const res = await http.post<ApiResponse<MenuRolDTO>>(URL, dto);
        if (!res.data?.status) return res.data as ApiResponse<MenuRol>;
        return { ...res.data, data: menuRolDtoToDomain(res.data.data) };
    }

    async delete(id: MenuRolId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    }
}