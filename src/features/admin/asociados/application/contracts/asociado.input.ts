type Asociado = {
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

export type CreateAsociadoInput = Asociado;

export type UpdateAsociadoInput = Asociado & {
   id: number;
   userId?: number;
}

export interface AsociadoEstadoInput {
   id: number,
   estado: number
   motivo: string
}

export interface AsociadoImagenInput {
   id: number,
   imagen: File,
}