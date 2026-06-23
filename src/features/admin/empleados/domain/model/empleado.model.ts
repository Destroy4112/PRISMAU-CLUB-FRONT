export interface Empleado {
    id: number;
    imagen: string | null;
    userId: number;
    nombre: string;
    apellidos: string;
    correo: string;
    telefono: string;
    fechaNacimiento: string | null;
    lugarNacimiento: string | null;
    tipoDocumento: string;
    documento: string;
    sexo: string;
    direccionResidencia: string | null;
    ciudadResidencia: string | null;
    estadoCivil: string | null;
    cargo: string | null;
    estado: number;
    rol : number;
}