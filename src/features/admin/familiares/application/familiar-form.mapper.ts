import { emptyToNull, safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { Familiar, FamiliarImagenPayload, FamiliarPayload } from "../domain/familiar.model";
import type { FamiliarContext, FamiliarForm, FamiliarImagenForm } from "../presentation/types/familiar";

function validateFamiliarContext(context: FamiliarContext): void {
    const hasAsociado = context.asociado_id != null;
    const hasAdherente = context.adherente_id != null;

    if (hasAsociado === hasAdherente) {
        throw new Error(
            "El familiar debe estar asociado a un asociado o a un adherente, pero no a ambos."
        );
    }
}

export function familiarFormToPayload(form: FamiliarForm, context: FamiliarContext, id?: number): FamiliarPayload {
    validateFamiliarContext(context);

    return {
        ...(id != null ? { id } : {}),
        asociado_id: context.asociado_id ?? null,
        adherente_id: context.adherente_id ?? null,
        Nombre: safeTrim(form.Nombre),
        Apellidos: safeTrim(form.Apellidos),
        TipoDocumento: safeTrim(form.TipoDocumento),
        Documento: safeTrim(form.Documento),
        Codigo: emptyToNull(context.Codigo),
        Sexo: safeTrim(form.Sexo),
        Parentesco: safeTrim(form.Parentesco),
        Correo: emptyToNull(form.Correo),
        Telefono: emptyToNull(form.Telefono),
        FechaNacimiento: emptyToNull(form.FechaNacimiento),
        LugarNacimiento: emptyToNull(form.LugarNacimiento),
        EstadoCivil: emptyToNull(form.EstadoCivil),
        DireccionResidencia: emptyToNull(form.DireccionResidencia),
        CiudadResidencia: emptyToNull(form.CiudadResidencia),
        Cargo: emptyToNull(form.Cargo),
        Estado: context.Estado,
    };
}

export function familiarDomainToForm(domain: Familiar): FamiliarForm {
    return {
        Nombre: domain.Nombre,
        Apellidos: domain.Apellidos,
        TipoDocumento: domain.TipoDocumento,
        Documento: domain.Documento,
        Correo: safeTrim(domain.Correo ?? ""),
        Telefono: safeTrim(domain.Telefono ?? ""),
        FechaNacimiento: safeTrim(domain.FechaNacimiento ?? ""),
        LugarNacimiento: safeTrim(domain.LugarNacimiento ?? ""),
        Sexo: domain.Sexo,
        DireccionResidencia: safeTrim(domain.DireccionResidencia ?? ""),
        CiudadResidencia: safeTrim(domain.CiudadResidencia ?? ""),
        EstadoCivil: safeTrim(domain.EstadoCivil ?? ""),
        Cargo: safeTrim(domain.Cargo ?? ""),
        Parentesco: domain.Parentesco,
    };
}

export function familiarImagenFormToPayload(form: FamiliarImagenForm): FamiliarImagenPayload {
    if (form.id == null) throw new Error("El id del familiar es requerido.");

    return {
        id: form.id,
        imagen: form.imagen,
    };
}