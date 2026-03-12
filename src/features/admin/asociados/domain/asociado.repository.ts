import type { ApiResponse, ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AsociadoFilter } from "./asociado.filters";
import type { Asociado, AsociadoEstadoPayload, AsociadoId, AsociadoImagenPayload, AsociadoPayload } from "./asociado.model";

export interface AsociadoRepository {
    getAll(params: PageParams & { filters?: AsociadoFilter }): Promise<PaginatedResponse<Asociado>>;
    getAsociados(): Promise<Asociado[]>;
    create(payload: AsociadoPayload): Promise<ApiResponse<Asociado>>;
    updateImagen(payload: AsociadoImagenPayload): Promise<ApiResponseVoid>;
    update(payload: AsociadoPayload): Promise<ApiResponseVoid>;
    updateEstado(payload: AsociadoEstadoPayload): Promise<ApiResponseVoid>;
    delete(id: AsociadoId): Promise<ApiResponseVoid>;
    deleteImagen(id: AsociadoId): Promise<ApiResponseVoid>;
}