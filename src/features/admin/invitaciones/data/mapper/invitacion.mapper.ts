import type { Invitacion } from "../../domain/models/invitacion.model";
import type { InvitacionDTO } from "../dto/invitacion.dto";

export function invitacionDtoToDomain(dto: InvitacionDTO): Invitacion {
   return {
      id: dto.id,
      Nombre: dto.Nombre,
      Apellidos: dto.Apellidos,
      Telefono: dto.Telefono,
      TipoDocumento: dto.TipoDocumento,
      Documento: dto.Documento,
      Status: dto.Status,
      usuario: dto.usuario,
      createdAt: dto.created_at
   };
}