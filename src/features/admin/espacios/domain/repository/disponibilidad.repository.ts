import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { SaveDisponibilidadInput } from "../../application/contracts/disponibilidad.input";
import type { Disponibilidad } from "../model/disponibilidad.model";

export interface DisponibilidadRepository {
   get(id: number): Promise<Disponibilidad[]>;
   save(disponibilidad: SaveDisponibilidadInput): Promise<ApiResponseVoid>;
}