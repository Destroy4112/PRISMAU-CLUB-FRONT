export type RubroId = number;

export interface Rubro {
    id: RubroId;
    rubro: string;
    valor: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface RubroPayload {
    id?: RubroId;
    rubro: string;
    valor: number | null;
}