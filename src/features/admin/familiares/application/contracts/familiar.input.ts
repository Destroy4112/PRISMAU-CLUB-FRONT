type FamiliarBase = {
    asociado_id: number | null;
    adherente_id: number | null;
    Nombre: string;
    Apellidos: string;
    TipoDocumento: string;
    Documento: string;
    Codigo: string | null;
    Correo: string | null;
    Telefono: string | null;
    FechaNacimiento: string | null;
    LugarNacimiento: string | null;
    Sexo: string;
    EstadoCivil: string | null;
    DireccionResidencia: string | null;
    CiudadResidencia: string | null;
    Cargo: string | null;
    Parentesco: string;
    Estado: number;
}

export type CreateFamiliarInput = FamiliarBase

export type UpdateFamiliarInput = FamiliarBase & {
    id: number,
    userId?: number
}

export interface FamiliarImagenInput {
    id: number,
    imagen: File,
}