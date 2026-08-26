import type { BusquedaUserResponse } from "../../domain/model/busqueda-user.model";
import type { BusquedaUserRepository } from "../../domain/repository/busqueda-user.repository";

export class BusquedaUserUseCases {

   private readonly repo: BusquedaUserRepository;

   constructor(repo: BusquedaUserRepository) {
      this.repo = repo;
   }

   get(documento: string): Promise<BusquedaUserResponse> {
      return this.repo.get(documento);
   }

}
