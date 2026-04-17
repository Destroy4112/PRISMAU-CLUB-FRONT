import type { Contrato } from "../../domain/models/contrato.model";
import type { ContratoDTO } from "../dto/contrato.dto";

export function contratoDtoToDomain(dto: ContratoDTO): Contrato {
    return {
        id: dto.id,
        nombres: dto.Nombres,
        apellidos: dto.Apellidos,
        identificacion: dto.Identificacion,
        correo: dto.Correo,
        telefono: dto.Telefono,
        empresa: dto.Empresa,
        ciudad: dto.Ciudad,
        estado: dto.Estado,
        createdAt: dto.created_at
    };
}