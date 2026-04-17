import type { ContratoId } from "../../domain/models/contrato.model";

export type ContratoDTO = {
    id: ContratoId;
    Nombres: string;
    Apellidos: string;
    Identificacion: string;
    Correo: string;
    Telefono: string;
    Empresa: string;
    Ciudad: string;
    Estado: string;
    created_at: string;
}