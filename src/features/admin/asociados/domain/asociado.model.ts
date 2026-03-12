export type AsociadoId = number;

export interface Asociado {
    id: AsociadoId;
    imagen?: string;
    Nombre: string;
    Apellidos: string;
    Correo: string;
    Telefono: string;
    FechaNacimiento: string;
    LugarNacimiento: string;
    TipoDocumento: string;
    Documento: string;
    Sexo: string;
    Codigo: string;
    DireccionResidencia: string;
    CiudadResidencia: string;
    TiempoResidencia: string;
    EstadoCivil: string;
    Profesion: string;
    Trabajo: string;
    Cargo: string;
    TiempoServicio: string;
    TelOficina: string;
    DireccionOficina: string;
    CiudadOficina: string;
    Estado: number;
    user_id: number;
    familiares_count?: number
    created_at: Date;
    updated_at: Date;
}

export interface AsociadoPayload {
    id?: AsociadoId;
    Nombre: string;
    Apellidos: string;
    Codigo: string;
    TipoDocumento: string;
    Documento: string;
    Correo: string;
    Telefono: string;
    FechaNacimiento: string;
    LugarNacimiento: string;
    Sexo: string;
    DireccionResidencia: string;
    CiudadResidencia: string;
    TiempoResidencia: string;
    EstadoCivil: string;
    Profesion: string;
    Trabajo: string;
    Cargo: string;
    TiempoServicio: string;
    TelOficina: string;
    DireccionOficina: string;
    CiudadOficina: string;
    Estado: number;
}

export interface AsociadoEstadoPayload {
    id: number,
    Estado: number
    Motivo: string
}

export interface AsociadoImagenPayload {
    id: number | null,
    imagen: File | null,
}