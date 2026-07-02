import type { CreateRubroInput, UpdateRubroInput } from "../../application/contracts/rubro.input";
import type { Rubro } from "../../domain/model/rubro.model";
import type { RubroForm } from "../types/rubro";

export function rubroFormToCreateInput(form: RubroForm): CreateRubroInput {
    return {
        rubro: form.rubro,
        valor: Number(form.valor),
    };
}

export function rubroFormToUpdateInput(form: RubroForm, id: number): UpdateRubroInput {
    return {
        id,
        rubro: form.rubro,
        valor: Number(form.valor),
    };
}

export function rubroDomainToForm(payload: Rubro): RubroForm {
    return {
        rubro: payload.rubro,
        valor: String(payload.valor),
    };
}