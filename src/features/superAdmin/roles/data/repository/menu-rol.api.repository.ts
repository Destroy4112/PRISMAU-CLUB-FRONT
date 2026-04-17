import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRole } from "../../domain/model/menu-role.model";
import type { MenuRolPayload } from "../../domain/payload/menu-rol.payload";
import type { MenuRolRepository } from "../../domain/repository/menu-rol.repository";
import type { MenuRoleDTO } from "../dto/menu-role.dto";
import { menuRolpayloadToCreateDto } from "../mapper/menu-rol.mapper";
import { menuRoleDtoToDomain } from "../mapper/menu-role.mapper";

const URL = ENDPOINTS.MENU_ROL;

export class MenuRolApiRepository implements MenuRolRepository {

    async getByRol(id: number): Promise<MenuRole[]> {
        const res = await http.get<MenuRoleDTO[]>(`${URL}/${id}`);
        return res.data.map(menuRoleDtoToDomain);
    }

    async create(payload: MenuRolPayload): Promise<ApiResponseVoid> {
        const dto = menuRolpayloadToCreateDto(payload);
        const res = await http.post<ApiResponseVoid>(URL, dto);
        if (!res.data?.status) return { status: false, errors: res.data.errors };
        return res.data;
    }

    async delete(id: number): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { status: false, errors: res.data.errors };
        return res.data;
    }
}