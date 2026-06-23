type EmpleadoBase = {
    Nombre: string;
    Apellidos: string;
    TipoDocumento: string;
    Documento: string;
    Correo: string;
    Telefono: string;
    Sexo: string;
    FechaNacimiento: string | null;
    LugarNacimiento: string | null;
    DireccionResidencia: string | null;
    CiudadResidencia: string | null;
    EstadoCivil: string | null;
    Cargo: string | null;
    Estado: number;
    Rol: number;
}

export type EmpleadoDTO = EmpleadoBase & {
    id: number;
    imagen: string | null;
    user_id: number;
}

export type EmpleadoCreateDTO = EmpleadoBase;

export type EmpleadoUpdateDTO = EmpleadoBase & {
    id: number;
    user_id?: number;
}

export type EmpleadoImagenDTO = FormData;