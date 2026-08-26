import type { FilterWithState } from "@shared/constants/filters/filters.constant";
import type { ApiResponseVoid, PageParams, PaginatedResponse } from "@shared/constants/response/Response.model";
import type { Empleado } from "../../domain/model/empleado.model";
import type { EmpleadoRepository } from "../../domain/repository/empleado.repository";
import type { CreateEmpleadoInput, EmpleadoImagenInput, UpdateEmpleadoInput } from "../contracts/empleado.input";

export class EmpleadoUseCases {

   private readonly repo: EmpleadoRepository;

   constructor(repo: EmpleadoRepository) {
      this.repo = repo;
   }

   getAll(params: PageParams & FilterWithState): Promise<PaginatedResponse<Empleado>> {
      return this.repo.getAll(params);
   }

   create(payload: CreateEmpleadoInput): Promise<ApiResponseVoid> {
      return this.repo.create(payload);
   }

   updateImagen(payload: EmpleadoImagenInput): Promise<ApiResponseVoid> {
      return this.repo.updateImagen(payload);
   }

   update(payload: UpdateEmpleadoInput): Promise<ApiResponseVoid> {
      return this.repo.update(payload);
   }

   delete(id: number): Promise<ApiResponseVoid> {
      return this.repo.delete(id);
   }

   deleteImagen(id: number): Promise<ApiResponseVoid> {
      return this.repo.deleteImagen(id);
   }
}
