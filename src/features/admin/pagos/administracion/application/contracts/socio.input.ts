import type { field } from "../../data/dto/socio.dto";

export interface UpdateSocioValueInput {
    documento: string;
    field: field;
    value: string;
}