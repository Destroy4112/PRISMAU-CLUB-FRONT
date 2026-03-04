export interface ICredenciales {
    id?: number,
    Documento: string,
    password?: string,
    Rol?: number
}

export interface IAsociado {
    id?: number;
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
    user_id?: number;
    asociado_id?: number;
    created_at?: Date;
    updated_at?: Date;
    familiares_count?: number
}

export interface IAdherente {
    id?: number,
    imagen?: string;
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
    user_id?: number;
    asociado_id?: number;
    created_at?: Date;
    updated_at?: Date;
    familiares_count?: number
};

export interface IFamiliar {
    id?: number;
    imagen?: string;
    user_id?: number;
    asociado_id?: number;
    adherente_id?: number;
    Nombre: string;
    Apellidos: string;
    Correo?: string;
    Telefono?: string;
    FechaNacimiento?: string;
    LugarNacimiento?: string;
    TipoDocumento: string;
    Documento: string;
    Sexo: string;
    Codigo: string;
    DireccionResidencia?: string;
    CiudadResidencia?: string;
    EstadoCivil?: string;
    Cargo?: string;
    Parentesco: string;
    Estado: number;
    created_at?: Date;
    updated_at?: Date;
};

export interface IAdministrador {
    id: number;
    Nombre: string;
    Apellidos: string;
    Correo: string;
    Telefono: string;
    Estado: number;
    created_at: string;
    updated_at: string;
}

export interface IEmpleado {
    id?: number,
    user_id?: number;
    imagen: string;
    Nombre: string;
    Apellidos: string;
    Correo: string;
    Codigo?: string;
    Telefono: string;
    FechaNacimiento: string;
    LugarNacimiento: string;
    TipoDocumento: string;
    Documento: string;
    Sexo: string;
    DireccionResidencia: string;
    CiudadResidencia: string;
    EstadoCivil: string;
    Cargo: string;
    Estado: number;
    Rol: number;
    created_at?: Date;
    updated_at?: Date;
};

export type Usuario = IAdministrador | IAsociado | IAdherente | IFamiliar;