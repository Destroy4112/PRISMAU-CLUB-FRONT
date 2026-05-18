import type { OptionId } from "../../domain/model/option.model";

export interface OptionInput {
    id?: OptionId;
    preguntaId: number;
    respuesta: string;
}