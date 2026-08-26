import type { CreateRubroInput, UpdateRubroInput } from "../../application/contracts/rubro.input";
import type { Rubro } from "../../domain/model/rubro.model";
import type { RubroCreateDTO, RubroDTO, RubroUpdateDTO } from "../dto/rubro.dto";

export function rubroDtoToDomain(dto: RubroDTO): Rubro {
   return {
      id: dto.id,
      rubro: dto.rubro,
      valor: Number(dto.valor),
   };
}

export function payloadToCreateDto(payload: CreateRubroInput): RubroCreateDTO {
   return {
      rubro: payload.rubro.trim(),
      valor: payload.valor.toString(),
   };
}

export function payloadToUpdateDto(payload: UpdateRubroInput): RubroUpdateDTO {
   return {
      id: payload.id!,
      rubro: payload.rubro.trim(),
      valor: payload.valor.toString(),
   };
}