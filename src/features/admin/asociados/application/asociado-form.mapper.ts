import type { AsociadoEstadoPayload, AsociadoImagenPayload, AsociadoPayload } from "../domain/asociado.model";
import type { AsociadoEstadoForm, AsociadoForm, AsociadoImagenForm } from "../presentation/types/asociado";

export function asociadoFormToPayload(form: AsociadoForm, id?: number): AsociadoPayload {
    return {
        ...(id != null ? { id } : {}),
        ...form,
    };
}

export function asociadoEstadoFormToPayload(form: AsociadoEstadoForm): AsociadoEstadoPayload {
    return {
        id: form.id,
        Estado: form.Estado,
        Motivo: form.Motivo,
    };
}

export function asociadoImagenFormToPayload(form: AsociadoImagenForm): AsociadoImagenPayload {
    if (form.id == null) throw new Error("El id del asociado es requerido.");
    return {
        id: form.id,
        imagen: form.imagen,
    };
}