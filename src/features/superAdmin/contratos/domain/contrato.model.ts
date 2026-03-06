export type ContratoId = number;

export interface Contrato {
    id: ContratoId;
    Nombres: string;
    Apellidos: string;
    Identificacion: string;
    Correo: string;
    Telefono: string;
    Empresa: string;
    Ciudad: string;
    Estado: string;
    createdAt?: string;
    updatedAt?: string;
}