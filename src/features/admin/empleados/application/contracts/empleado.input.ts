type Empleado = {
   nombre: string;
   apellidos: string;
   tipoDocumento: string;
   documento: string;
   correo: string;
   telefono: string;
   sexo: string;
   fechaNacimiento: string | null;
   lugarNacimiento: string | null;
   direccionResidencia: string | null;
   ciudadResidencia: string | null;
   estadoCivil: string | null;
   cargo: string | null;
   estado: number;
   rol: number
}

export type CreateEmpleadoInput = Empleado;

export type UpdateEmpleadoInput = Empleado & {
   id: number;
   userId?: number;
}

export interface EmpleadoImagenInput {
   id: number,
   imagen: File,
}