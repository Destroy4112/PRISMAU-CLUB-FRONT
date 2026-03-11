import type { SearchPersonBase } from "../domain/usuario-search.model";
import type { SearchPersonaBaseDTO } from "./busqueda.dto";

export function busquedaDtoToDomain(dto: SearchPersonaBaseDTO): SearchPersonBase {
    return {
        id: dto.id,
        imagen: dto.imagen,
        NombreCompleto: dto.Nombre + ' ' + dto.Apellidos,
        userId: dto.user_id,
        Correo: dto.Correo,
        Telefono: dto.Telefono,
        TipoDocumento: dto.TipoDocumento,
        Documento: dto.Documento,
        Sexo: dto.Sexo,
        Codigo: dto.Codigo,
        Cargo: dto.Cargo,
        Estado: dto.Estado,
    };
}