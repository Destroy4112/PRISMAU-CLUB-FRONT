import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { ProgramacionInput } from "../../application/contracts/programacion.input";

export interface ProgramacionRepository {
    create(programacion: ProgramacionInput): Promise<ApiResponseVoid>;
}