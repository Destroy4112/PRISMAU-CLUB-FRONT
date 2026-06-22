export interface Adherente {
    id: number;
    imagen: string | null;
    userId: number;
    asociadoId: number | null;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    fechaNacimiento: string | null;
    lugarNacimiento: string | null;
    tipoDocumento: string;
    documento: string;
    sexo: string;
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
    familiaresCount: number
    estado: number;
}