import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { EncuestaInput } from "../../application/contracts/encuesta.input";
import type { Encuesta, EncuestaId } from "../model/encuesta.model";

export interface EncuestaRepository {
   getAll(): Promise<Encuesta[]>;
   create(rubro: EncuestaInput): Promise<ApiResponseVoid>;
   update(rubro: EncuestaInput): Promise<ApiResponseVoid>;
   delete(id: EncuestaId): Promise<ApiResponseVoid>;
}