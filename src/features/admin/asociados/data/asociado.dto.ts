import type { AsociadoId } from "../domain/asociado.model";

export type AsociadoDTO = {
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

export interface AsociadoCreateDTO {
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

export interface AsociadoUpdateDTO {
    id: AsociadoId;
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

export interface AsociadoEstadoDTO {
    id: number,
    Estado: number
    Motivo: string
}

export type AsociadoImagenDTO = FormData;