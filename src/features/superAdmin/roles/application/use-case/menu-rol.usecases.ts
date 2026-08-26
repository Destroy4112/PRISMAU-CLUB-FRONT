import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { MenuRole } from "../../domain/model/menu-role.model";
import type { MenuRolRepository } from "../../domain/repository/menu-rol.repository";
import type { MenuRolInput } from "../contracts/menu-rol.input";

export class MenuRolUseCases {

   private readonly repo: MenuRolRepository;

   constructor(repo: MenuRolRepository) {
      this.repo = repo;
   }

   getByRol(id: number): Promise<MenuRole[]> {
      return this.repo.getByRol(id);
   }

   create(payload: MenuRolInput): Promise<ApiResponseVoid> {
      return this.repo.create(payload);
   }

   delete(id: number): Promise<ApiResponseVoid> {
      return this.repo.delete(id);
   }
}
