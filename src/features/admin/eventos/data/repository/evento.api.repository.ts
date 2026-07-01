import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CreateEventoInput, UpdateEventoInput } from "../../application/contracts/evento.input";
import type { Evento } from "../../domain/model/evento.model";
import type { EventoRepository } from "../../domain/repository/evento.repository";
import type { EventoDTO } from "../dto/evento.dto";
import { eventoDtoToDomain, eventoInputToCreateDto, eventoInputToUpdateDto } from "../mapper/evento.mapper";

const URL = ENDPOINTS.EVENTOS;

export class EventoApiRepository implements EventoRepository {

    async getAll(): Promise<Evento[]> {
        const res = await http.get<EventoDTO[]>(URL);
        return res.data.map(eventoDtoToDomain);
    }

    async create(payload: CreateEventoInput): Promise<ApiResponseVoid> {
        const dto = eventoInputToCreateDto(payload);
        const res = await http.post<ApiResponseVoid>(URL, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async update(payload: UpdateEventoInput): Promise<ApiResponseVoid> {
        const dto = eventoInputToUpdateDto(payload);
        const res = await http.put<ApiResponseVoid>(`${URL}/${dto.id}`, dto);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

    async delete(id: number): Promise<ApiResponseVoid> {
        const res = await http.delete<ApiResponseVoid>(`${URL}/${id}`);
        if (!res.data?.status) return { ...res.data, errors: res.data.errors };
        return res.data;
    }

}