import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AdherenteEstadoInput, AdherenteImagenInput, CreateAdherenteInput, UpdateAdherenteInput } from "../../application/contracts/adherente.input";
import type { Adherente } from "../model/adherente.model";

export interface AdherenteRepository {
   getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Adherente>>;
   create(payload: CreateAdherenteInput): Promise<ApiResponseVoid>;
   updateImagen(payload: AdherenteImagenInput): Promise<ApiResponseVoid>;
   update(payload: UpdateAdherenteInput): Promise<ApiResponseVoid>;
   updateEstado(payload: AdherenteEstadoInput): Promise<ApiResponseVoid>;
   changeToAsociado(id: number): Promise<ApiResponseVoid>;
   delete(id: number): Promise<ApiResponseVoid>;
   deleteImagen(id: number): Promise<ApiResponseVoid>;
}