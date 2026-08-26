import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import type { Disponibilidad } from "../../domain/model/disponibilidad.model";
import type { DisponibilidadRepository } from "../../domain/repository/disponibilidad.repository";
import type { SaveDisponibilidadInput } from "../contracts/disponibilidad.input";

export class DisponibilidadUseCases {

   private readonly repo: DisponibilidadRepository;

   constructor(repo: DisponibilidadRepository) {
      this.repo = repo;
   }

   get(id: number): Promise<Disponibilidad[]> {
      return this.repo.get(id);
   }

   save(disponibilidad: SaveDisponibilidadInput): Promise<ApiResponseVoid> {
      return this.repo.save(disponibilidad);
   }

}
