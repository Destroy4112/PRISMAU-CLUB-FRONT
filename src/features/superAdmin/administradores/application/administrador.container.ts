import { AdministradorApiRepository } from "../data/repository/administrador.api.repository";
import type { AdministradorRepository } from "../domain/repository/administrador.repository";
import { AdministradorUseCases } from "./use-cases/administrador.usecases";

const administradorRepository: AdministradorRepository = new AdministradorApiRepository();
export const administradorUseCases = new AdministradorUseCases(administradorRepository);