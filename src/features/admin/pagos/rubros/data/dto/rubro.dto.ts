import type { RubroId } from "../../domain/model/rubro.model";

type RubroBase = {
    rubro: string;
    valor: string;
}

export type RubroDTO = RubroBase & { id: RubroId };

export type RubroCreateDTO = RubroBase;

export type RubroUpdateDTO = RubroBase & { id: RubroId };