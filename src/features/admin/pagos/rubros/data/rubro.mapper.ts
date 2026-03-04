import type { Rubro, RubroPayload } from "../domain/rubro.model";
import type { RubroCreateDTO, RubroDTO, RubroUpdateDTO } from "./rubro.dto";

export function rubroDtoToDomain(dto: RubroDTO): Rubro {
    return {
        id: dto.id,
        rubro: dto.rubro,
        valor: Number(dto.valor),
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}

export function payloadToCreateDto(payload: RubroPayload): RubroCreateDTO {
    return {
        rubro: payload.rubro.trim(),
        valor: Number(payload.valor),
    };
}

export function payloadToUpdateDto(payload: RubroPayload): RubroUpdateDTO {
    return {
        id: payload.id!,
        rubro: payload.rubro.trim(),
        valor: Number(payload.valor),
    };
}