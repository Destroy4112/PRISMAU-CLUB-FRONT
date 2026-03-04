import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Menu, MenuId, MenuPayload } from "../domain/menu.model";
import type { MenuRepository } from "../domain/menu.repository";
import type { MenuDTO } from "./menu.dto";
import { menuDtoToDomain, payloadToCreateDto, payloadToUpdateDto } from "./menu.mapper";

const URL = ENDPOINTS.MENU;

export class MenuApiRepository implements MenuRepository {

    async getAll(): Promise<Menu[]> {
        const res = await http.get<MenuDTO[]>(URL);
        return res.data.map(menuDtoToDomain);
    }

    async create(menu: MenuPayload): Promise<ApiResponse<Menu>> {
        const dto = payloadToCreateDto(menu);
        const res = await http.post<ApiResponse<MenuDTO>>(URL, dto);
        if (!res.data?.status) return res.data as ApiResponse<Menu>;
        return { ...res.data, data: menuDtoToDomain(res.data.data) };
    }

    async update(menu: MenuPayload): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(menu);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        return res.data;
    }

    async delete(id: MenuId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        return res.data;
    }
}