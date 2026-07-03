import { AdministracionApiRepository } from "../../data/repository/administracion.api.repository";
import type { AdministracionRepository } from "../../domain/repository/administracion.repository";
import { AdministracionUseCases } from "../use-case/administracion.usecases";

const administracionRepository: AdministracionRepository = new AdministracionApiRepository();
export const administracionUseCases = new AdministracionUseCases(administracionRepository);