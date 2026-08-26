import type { ChangeEvent } from "react";
import type { Empleado } from "../../domain/model/empleado.model";

export type EmpleadoModalKey = "crearEditar" | "estado" | "imagen";

export type EmpleadoForm = {
   nombre: string;
   apellidos: string;
   tipoDocumento: string;
   documento: string;
   correo: string;
   telefono: string;
   fechaNacimiento: string;
   lugarNacimiento: string;
   sexo: string;
   direccionResidencia: string;
   ciudadResidencia: string;
   estadoCivil: string;
   cargo: string;
   estado: number;
   rol: number | null;
}

export const EMPLEADO_FORM_INITIAL: EmpleadoForm = {
   nombre: "",
   apellidos: "",
   tipoDocumento: "",
   documento: "",
   correo: "",
   telefono: "",
   fechaNacimiento: "",
   lugarNacimiento: "",
   sexo: "",
   direccionResidencia: "",
   ciudadResidencia: "",
   estadoCivil: "",
   cargo: "",
   estado: 1,
   rol: null
}

export interface EmpleadoImagenForm {
   id: number | null,
   imagen: File | null,
   imagenActualUrl: string;
}

export const EMPLEADO_IMAGEN_INITIAL: EmpleadoImagenForm = {
   id: null,
   imagen: null,
   imagenActualUrl: ""
}

export type ColumnsEmpleadoProps = {
   cargar: (adherente: Empleado) => void,
   handleDelete: (id: number) => void,
   cargarImagen: (id: number, imagen: string) => void,
   reset: (id: number) => void
}

export type FormEmpleadoProps = {
   form: EmpleadoForm,
   touched: boolean,
   handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
}