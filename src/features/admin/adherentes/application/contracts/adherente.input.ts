type Adherente = {
    asociadoId: number | null;
    nombre: string;
    apellidos: string;
    tipoDocumento: string;
    documento: string;
    correo: string;
    telefono: string;
    sexo: string;
    estado: number;
    fechaNacimiento: string | null;
    lugarNacimiento: string | null;
    codigo: string | null;
    direccionResidencia: string | null;
    ciudadResidencia: string | null;
    tiempoResidencia: string | null;
    estadoCivil: string | null;
    profesion: string | null;
    trabajo: string | null;
    cargo: string | null;
    tiempoServicio: string | null;
    telOficina: string | null;
    direccionOficina: string | null;
    ciudadOficina: string | null;
}

export type CreateAdherenteInput = Adherente;

export type UpdateAdherenteInput = Adherente & {
    id: number;
    userId?: number;
}

export interface AdherenteEstadoInput {
    id: number,
    estado: number
    motivo: string
}

export interface AdherenteImagenInput {
    id: number,
    imagen: File,
}