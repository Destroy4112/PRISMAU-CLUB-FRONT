import { emptyToNull } from "@shared/utilities/convertidores/normalizeText";
import type { SearchPersonBase } from "../../domain/model/busqueda-user.model";
import type { SearchPersonaBaseDTO } from "../dto/busqueda-user.dto";

export function busquedaUserDtoToDomain(dto: SearchPersonaBaseDTO): SearchPersonBase {
    return {
        id: dto.id,
        imagen: dto.imagen,
        nombreCompleto: dto.Nombre + ' ' + dto.Apellidos,
        userId: dto.user_id,
        correo: dto.Correo,
        telefono: dto.Telefono,
        tipoDocumento: dto.TipoDocumento,
        documento: dto.Documento,
        sexo: dto.Sexo,
        codigo: emptyToNull(dto.Codigo),
        cargo: emptyToNull(dto.Cargo),
        estado: dto.Estado,
    };
}
