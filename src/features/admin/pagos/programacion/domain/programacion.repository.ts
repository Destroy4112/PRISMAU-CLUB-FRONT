import type { ApiResponse } from "@models/response/Response.model";
import type { Programacion } from "./programacion.entity";

export interface ProgramacionRepository {
    create(programacion: Programacion): Promise<ApiResponse<Programacion>>;
}