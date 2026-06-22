type AdherenteBase = {
    asociado_id: number | null;
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
export type AdherenteDTO = AdherenteBase & {
    id: number;
    imagen: string | null;
    user_id: number;
    familiares_count: number
}

export type AdherenteCreateDTO = AdherenteBase;

export type AdherenteUpdateDTO = AdherenteBase & {
    id: number;
    user_id?: number;
}

export interface AdherenteEstadoDTO {
    id: number,
    Estado: number
    Motivo: string
}

export type AdherenteImagenDTO = FormData;