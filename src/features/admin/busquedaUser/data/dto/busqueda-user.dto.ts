import type { EntityType } from "../../domain/model/busqueda-user.model";

export type BusquedaUserResponseDTO =
   | { status: true; data: DataResultSearchDTO }
   | { status: false; message: string };

export type DataResultSearchDTO = {
   status: boolean;
   tipo: EntityType;
   user: SearchPersonaBaseDTO;
   relacionado: SearchPersonaBaseDTO | null;
};

export type SearchPersonaBaseDTO = {
   id: number;
   imagen: string | null;
   user_id: number;
   Nombre: string;
   Apellidos: string;
   Correo: string;
   Telefono: string;
   TipoDocumento: string;
   Documento: string;
   Sexo: string;
   Codigo?: string | null;
   Cargo?: string | null;
   Estado: number;
};