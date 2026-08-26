import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Familiar, FamiliarId } from "../../domain/model/familiar.model";
import type { FamiliarRepository } from "../../domain/repository/familiar.repository";
import type { CreateFamiliarInput, FamiliarImagenInput, UpdateFamiliarInput } from "../contracts/familiar.input";

export class FamiliarUseCases {

   private readonly repo: FamiliarRepository;

   constructor(repo: FamiliarRepository) {
      this.repo = repo;
   }

   getAll(id: FamiliarId, rol: string): Promise<Familiar[]> {
      return this.repo.getAll(id, rol);
   }

   create(payload: CreateFamiliarInput): Promise<ApiResponseVoid> {
      return this.repo.create(payload);
   }

   updateImagen(payload: FamiliarImagenInput): Promise<ApiResponseVoid> {
      return this.repo.updateImagen(payload);
   }

   update(payload: UpdateFamiliarInput): Promise<ApiResponseVoid> {
      return this.repo.update(payload);
   }

   delete(id: FamiliarId): Promise<ApiResponseVoid> {
      return this.repo.delete(id);
   }

   deleteImagen(id: FamiliarId): Promise<ApiResponseVoid> {
      return this.repo.deleteImagen(id);
   }
}
