import type { Contrato } from "../domain/contrato.model";
import type { ContratoDTO } from "./contrato.dto";

export function contratoDtoToDomain(dto: ContratoDTO): Contrato {
    return {
        id: dto.id,
        Nombres: dto.Nombres,
        Apellidos: dto.Apellidos,
        Identificacion: dto.Identificacion,
        Correo: dto.Correo,
        Telefono: dto.Telefono,
        Empresa: dto.Empresa,
        Ciudad: dto.Ciudad,
        Estado: dto.Estado,
        createdAt: dto.created_at,
        updatedAt: dto.updated_at,
    };
}