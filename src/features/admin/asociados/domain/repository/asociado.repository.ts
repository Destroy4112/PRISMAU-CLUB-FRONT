import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { AsociadoEstadoInput, AsociadoImagenInput, CreateAsociadoInput, UpdateAsociadoInput } from "../../application/contracts/asociado.input";
import type { Asociado } from "../model/asociado.model";

export interface AsociadoRepository {
    getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Asociado>>;
    getAsociados(): Promise<Asociado[]>;
    create(payload: CreateAsociadoInput): Promise<ApiResponseVoid>;
    updateImagen(payload: AsociadoImagenInput): Promise<ApiResponseVoid>;
    update(payload: UpdateAsociadoInput): Promise<ApiResponseVoid>;
    updateEstado(payload: AsociadoEstadoInput): Promise<ApiResponseVoid>;
    delete(id: number): Promise<ApiResponseVoid>;
    deleteImagen(id: number): Promise<ApiResponseVoid>;
}