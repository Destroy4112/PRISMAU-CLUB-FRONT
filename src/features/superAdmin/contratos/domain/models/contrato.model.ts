export type ContratoId = number;

export interface Contrato {
    id: ContratoId;
    nombres: string;
    apellidos: string;
    identificacion: string;
    correo: string;
    telefono: string;
    empresa: string;
    ciudad: string;
    estado: string;
    createdAt: string;
}