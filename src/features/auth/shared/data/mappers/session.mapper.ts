import type { Session } from "@features/auth/shared/domain/models/session.model";
import type { SessionDTO } from "../dtos/session.dto";

export function sessionDtoToDomain(dto: SessionDTO): Session {
   return {
      token: dto.token,
      isAuthenticated: true,
      user: {
         id: dto.user.id,
         userId: dto.user.user_id,
         nombre: dto.user.nombre,
         apellidos: dto.user.apellidos,
         documento: dto.user.documento,
         estado: dto.user.estado,
         rol: dto.user.rol,
      },
   };
}