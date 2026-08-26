type Rubro = {
   rubro: string;
   valor: number;
}

export type CreateRubroInput = Rubro;

export type UpdateRubroInput = Rubro & { id: number };
