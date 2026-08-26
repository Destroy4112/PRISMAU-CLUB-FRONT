import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { CreateFamiliarInput, FamiliarImagenInput, UpdateFamiliarInput } from "../../application/contracts/familiar.input";
import type { Familiar, FamiliarId } from "../model/familiar.model";

export interface FamiliarRepository {
   getAll(id: FamiliarId, rol: string): Promise<Familiar[]>;
   create(payload: CreateFamiliarInput): Promise<ApiResponseVoid>;
   updateImagen(payload: FamiliarImagenInput): Promise<ApiResponseVoid>;
   update(payload: UpdateFamiliarInput): Promise<ApiResponseVoid>;
   delete(id: FamiliarId): Promise<ApiResponseVoid>;
   deleteImagen(id: FamiliarId): Promise<ApiResponseVoid>;
}