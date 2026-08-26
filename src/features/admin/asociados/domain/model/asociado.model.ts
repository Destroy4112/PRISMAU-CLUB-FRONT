export interface Asociado {
   id: number;
   imagen: string | null;
   nombre: string;
   apellidos: string;
   tipoDocumento: string;
   documento: string;
   correo: string;
   telefono: string;
   sexo: string;
   estado: number;
   userId: number;
   familiaresCount: number
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