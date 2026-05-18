import type { OptionId } from "../../domain/model/option.model";

type OptionBase = {
    pregunta_id: number;
    Respuesta: string;
}

export type OptionDTO = OptionBase & {
    id: OptionId;
}

export type OptionCreateDTO = OptionBase;

export type OptionUpdateDTO = OptionBase & {
    id: OptionId;
}