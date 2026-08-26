import type { Dashboard } from "../../domain/model/dashboard.model";
import type { DashboardDTO } from "../dto/dashboard.dto";

export function dashboardDtoToDomain(dto: DashboardDTO): Dashboard {
   return {
      contContrataciones: dto.contContrataciones,
      contAdmins: dto.contAdmins,
      contRoles: dto.contRoles,
      contModulos: dto.contModulos,
      contHobbies: dto.contHobbies,

      contSolicitudes: dto.contSolicitudes,
      contReservas: dto.contReservas,
      contEncuestas: dto.contEncuestas,
      contFamiliares: dto.contFamiliares,
      contAsociados: dto.contAsociados,
      contAdherentes: dto.contAdherentes,
      contEmpleados: dto.contEmpleados,
      contEspacios: dto.contEspacios,
      contNoticias: dto.contNoticias,
      contInvitados: dto.contInvitados,

      contFamiliaresSocio: dto.contFamiliaresSocio,
      contInvitadosSocio: dto.contInvitadosSocio,
   };
}