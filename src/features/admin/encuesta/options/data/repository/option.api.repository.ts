import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { OptionInput } from "../../application/contracts/option.input";
import type { Option, OptionId } from "../../domain/model/option.model";
import type { OptionRepository } from "../../domain/repository/option.repository";
import type { OptionDTO } from "../dto/option.dto";
import { optionDtoToDomain, optionPayloadToCreateDto, optionPayloadToUpdateDto } from "../mapper/option.mapper";

const URL = ENDPOINTS.RESPUESTAS;

export class OptionApiRepository implements OptionRepository {

    async getAll(id: number): Promise<Option[]> {
        const res = await http.get<OptionDTO[]>(`${URL}/${id}`);
        return res.data.map(optionDtoToDomain);
    }

    async create(option: OptionInput): Promise<ApiResponseVoid> {
        const dto = optionPayloadToCreateDto(option);
        const res = await http.post<ApiResponseVoid>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async update(option: OptionInput): Promise<ApiResponseVoid> {
        const dto = optionPayloadToUpdateDto(option);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async delete(id: OptionId): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }
}