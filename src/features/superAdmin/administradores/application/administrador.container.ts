import { AdministradorApiRepository } from "../data/administrador.api.repository";
import type { AdministradorRepository } from "../domain/administrador.repository";
import { AdministradorUseCases } from "./administrador.usecases";

const administradorRepository: AdministradorRepository = new AdministradorApiRepository();

export const administradorUseCases = new AdministradorUseCases(administradorRepository);