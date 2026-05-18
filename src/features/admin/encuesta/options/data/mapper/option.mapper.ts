import type { OptionInput } from "../../application/contracts/option.input";
import type { Option } from "../../domain/model/option.model";
import type { OptionCreateDTO, OptionDTO, OptionUpdateDTO } from "../dto/option.dto";

export function optionDtoToDomain(dto: OptionDTO): Option {
    return {
        id: dto.id,
        preguntaId: dto.pregunta_id,
        respuesta: dto.Respuesta,
    };
}

export function optionPayloadToCreateDto(payload: OptionInput): OptionCreateDTO {
    return {
        Respuesta: payload.respuesta,
        pregunta_id: payload.preguntaId,
    };
}

export function optionPayloadToUpdateDto(payload: OptionInput): OptionUpdateDTO {
    return {
        id: payload.id!,
        Respuesta: payload.respuesta,
        pregunta_id: payload.preguntaId,
    };
}