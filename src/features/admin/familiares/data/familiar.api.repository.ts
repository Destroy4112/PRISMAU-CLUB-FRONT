import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponse, ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Familiar, FamiliarId, FamiliarImagenPayload, FamiliarPayload } from "../domain/familiar.model";
import type { FamiliarRepository } from "../domain/familiar.repository";
import type { FamiliarDTO } from "./familiar.dto";
import { familiarDtoToDomain, payloadToCreateDto, payloadToImagenDto, payloadToUpdateDto } from "./familiar.mapper";

const URL = ENDPOINTS.FAMILIARES;

export class FamiliarApiRepository implements FamiliarRepository {

    async getAll(id: number, rol: string): Promise<Familiar[]> {
        const res = await http.get<FamiliarDTO[]>(`${URL}/${id}/${rol}`);
        return res.data.map(familiarDtoToDomain);
    }

    async create(payload: FamiliarPayload): Promise<ApiResponse<Familiar>> {
        const dto = payloadToCreateDto(payload);
        const res = await http.post<ApiResponse<FamiliarDTO>>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return { ...res.data, data: familiarDtoToDomain(res.data.data) };
    }

    async updateImagen(payload: FamiliarImagenPayload): Promise<ApiResponseVoid> {
        const dto = payloadToImagenDto(payload);
        const res = await http.post<ApiResponseVoid>(`${URL}/imagen/${payload.id}`, dto, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
        return res.data;
    }

    async update(payload: FamiliarPayload): Promise<ApiResponseVoid> {
        const dto = payloadToUpdateDto(payload);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async delete(id: FamiliarId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async deleteImagen(id: FamiliarId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/imagen/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }
}