import imagen from "@shared/assets/img/imagen";
import { getFilePreview } from "@shared/utilities/convertidores/converters";
import type { UpdateSocioValueInput } from "../../application/contracts/socio.input";
import type { Socio } from "../../domain/models/socio.model";
import type { SocioDTO, UpdateSocioValueDto } from "../dto/socio.dto";

export function socioDtoToDomain(dto: SocioDTO): Socio {

    const imagenSocio = getFilePreview(dto.imagen) ?? (dto.sexo === "Femenino" ? imagen.femenino : imagen.masculino);

    return {
        id: dto.id,
        imagen: imagenSocio,
        nombre: dto.nombre,
        apellidos: dto.apellidos,
        tipoDocumento: dto.tipoDocumento,
        documento: dto.documento,
        sexo: dto.sexo,
        codigo: dto.codigo,
        telefono: dto.telefono,
        direccion: dto.direccion,
        estado: dto.estado,
        rol: dto.rol,
        mensualidad: dto.mensualidad,
        cuotaBaile: dto.cuota_baile
    };
}

export function socioValueInputToUpdateDto(input: UpdateSocioValueInput): UpdateSocioValueDto {
    return {
        documento: input.documento,
        field: input.field,
        value: input.value
    }
}