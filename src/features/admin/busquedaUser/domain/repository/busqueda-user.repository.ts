import type { BusquedaUserResponse } from "../model/busqueda-user.model";

export interface BusquedaUserRepository {
   get(documento: string): Promise<BusquedaUserResponse>;
}