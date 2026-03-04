import type { RubroId } from "../domain/rubro.model";

export type RubroDTO = {
    id: RubroId;
    rubro: string;
    valor: string;
    created_at?: string;
    updated_at?: string;
}

export interface RubroCreateDTO {
    rubro: string;
    valor: number;
}

export interface RubroUpdateDTO {
    id: RubroId;
    rubro: string;
    valor: number;
}