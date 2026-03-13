import type { FamiliarId } from "../domain/familiar.model";

export interface FamiliarDTO {
    id: FamiliarId;
    imagen?: string | null;
    user_id: number;
    asociado_id?: number | null;
    adherente_id?: number | null;
    Nombre: string;
    Apellidos: string;
    Correo?: string | null;
    Telefono?: string | null;
    FechaNacimiento?: string | null;
    LugarNacimiento?: string | null;
    TipoDocumento: string;
    Documento: string;
    Sexo: string;
    Codigo: string;
    DireccionResidencia?: string | null;
    CiudadResidencia?: string | null;
    EstadoCivil?: string | null;
    Cargo?: string | null;
    Parentesco: string;
    Estado: number;
    created_at: string;
    updated_at: string;
}

export interface FamiliarCreateDTO {
    asociado_id?: number | null;
    adherente_id?: number | null;
    Nombre: string;
    Apellidos: string;
    TipoDocumento: string;
    Documento: string;
    Codigo?: string | null;
    Correo?: string | null;
    Telefono?: string | null;
    FechaNacimiento?: string | null;
    LugarNacimiento?: string | null;
    Sexo: string;
    EstadoCivil?: string | null;
    DireccionResidencia?: string | null;
    CiudadResidencia?: string | null;
    Cargo?: string | null;
    Parentesco: string;
    Estado: number;
}

export interface FamiliarUpdateDTO extends FamiliarCreateDTO {
    id: FamiliarId;
}

export type FamiliarImagenDTO = FormData;