import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { CreateEmpleadoInput, EmpleadoImagenInput, UpdateEmpleadoInput } from "../../application/contracts/empleado.input";
import type { Empleado } from "../model/empleado.model";

export interface EmpleadoRepository {
    getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Empleado>>;
    create(payload: CreateEmpleadoInput): Promise<ApiResponseVoid>;
    updateImagen(payload: EmpleadoImagenInput): Promise<ApiResponseVoid>;
    update(payload: UpdateEmpleadoInput): Promise<ApiResponseVoid>;
    delete(id: number): Promise<ApiResponseVoid>;
    deleteImagen(id: number): Promise<ApiResponseVoid>;
}