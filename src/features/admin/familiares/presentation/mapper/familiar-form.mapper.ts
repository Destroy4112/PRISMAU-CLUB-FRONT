import { safeTrim } from "@shared/utilities/convertidores/normalizeText";
import type { CreateFamiliarInput, FamiliarImagenInput, UpdateFamiliarInput } from "../../application/contracts/familiar.input";
import type { Familiar } from "../../domain/model/familiar.model";
import type { FamiliarContext, FamiliarForm, FamiliarImagenForm } from "../types/familiar";

function validateFamiliarContext(context: FamiliarContext): void {
    const hasAsociado = context.asociado_id != null;
    const hasAdherente = context.adherente_id != null;

    if (hasAsociado === hasAdherente) {
        throw new Error(
            "El familiar debe estar asociado a un asociado o a un adherente, pero no a ambos."
        );
    }
}

export function familiarFormToCreateInput(form: FamiliarForm, context: FamiliarContext): CreateFamiliarInput {
    validateFamiliarContext(context);

    return {
        asociado_id: context.asociado_id ?? null,
        adherente_id: context.adherente_id ?? null,
        Nombre: form.Nombre,
        Apellidos: form.Apellidos,
        TipoDocumento: form.TipoDocumento,
        Documento: form.Documento,
        Codigo: context.Codigo,
        Sexo: form.Sexo,
        Parentesco: form.Parentesco,
        Correo: form.Correo,
        Telefono: form.Telefono,
        FechaNacimiento: form.FechaNacimiento,
        LugarNacimiento: form.LugarNacimiento,
        EstadoCivil: form.EstadoCivil,
        DireccionResidencia: form.DireccionResidencia,
        CiudadResidencia: form.CiudadResidencia,
        Cargo: form.Cargo,
        Estado: context.Estado,
    };
}

export function familiarFormToUpdateInput(form: FamiliarForm, context: FamiliarContext, id: number): UpdateFamiliarInput {
    validateFamiliarContext(context);

    return {
        id,
        asociado_id: context.asociado_id ?? null,
        adherente_id: context.adherente_id ?? null,
        Nombre: form.Nombre,
        Apellidos: form.Apellidos,
        TipoDocumento: form.TipoDocumento,
        Documento: form.Documento,
        Codigo: context.Codigo,
        Sexo: form.Sexo,
        Parentesco: form.Parentesco,
        Correo: form.Correo,
        Telefono: form.Telefono,
        FechaNacimiento: form.FechaNacimiento,
        LugarNacimiento: form.LugarNacimiento,
        EstadoCivil: form.EstadoCivil,
        DireccionResidencia: form.DireccionResidencia,
        CiudadResidencia: form.CiudadResidencia,
        Cargo: form.Cargo,
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

export function familiarImagenFormToPayload(form: FamiliarImagenForm): FamiliarImagenInput {
    if (form.id == null) throw new Error("El id del familiar es requerido.");

    return {
        id: form.id,
        imagen: form.imagen!,
    };
}