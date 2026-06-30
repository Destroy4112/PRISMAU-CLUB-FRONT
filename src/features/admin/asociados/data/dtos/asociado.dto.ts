type AsociadoBase = {
    Nombre: string;
    Apellidos: string;
    TipoDocumento: string;
    Documento: string;
    Correo: string;
    Telefono: string;
    Sexo: string;
    Estado: number;
    Codigo: string | null;
    FechaNacimiento: string | null;
    LugarNacimiento: string | null;
    DireccionResidencia: string | null;
    CiudadResidencia: string | null;
    TiempoResidencia: string | null;
    EstadoCivil: string | null;
    Profesion: string | null;
    Trabajo: string | null;
    Cargo: string | null;
    TiempoServicio: string | null;
    TelOficina: string | null;
    DireccionOficina: string | null;
    CiudadOficina: string | null;
}
export type AsociadoDTO = AsociadoBase & {
    id: number;
    imagen: string | null;
    user_id: number;
    familiares_count: number
}

export type AsociadoCreateDTO = AsociadoBase;

export type AsociadoUpdateDTO = AsociadoBase & {
    id: number;
    user_id?: number;
}

export interface AsociadoEstadoDTO {
    id: number,
    Estado: number
    Motivo: string
}

export type AsociadoImagenDTO = FormData;