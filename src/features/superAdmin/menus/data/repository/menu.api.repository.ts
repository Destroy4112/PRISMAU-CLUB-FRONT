import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Menu, MenuId } from "../../domain/model/menu.model";
import type { MenuPayload } from "../../domain/payload/menu.payload";
import type { MenuRepository } from "../../domain/repository/menu.repository";
import type { MenuDTO } from "../dto/menu.dto";
import { menuDtoToDomain, menuPayloadToCreateDto, menuPayloadToUpdateDto } from "../mapper/menu.mapper";

const URL = ENDPOINTS.MENU;

export class MenuApiRepository implements MenuRepository {

    async getAll(): Promise<Menu[]> {
        const res = await http.get<MenuDTO[]>(URL);
        return res.data.map(menuDtoToDomain);
    }

    async create(menu: MenuPayload): Promise<ApiResponseVoid> {
        const dto = menuPayloadToCreateDto(menu);
        const res = await http.post<ApiResponseVoid>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async update(menu: MenuPayload): Promise<ApiResponseVoid> {
        const dto = menuPayloadToUpdateDto(menu);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async delete(id: MenuId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }
}