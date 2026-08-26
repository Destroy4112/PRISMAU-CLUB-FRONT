import { VerificarApiRepository } from "../../data/repository/verificar.api.repository";
import type { VerificarRepository } from "../../domain/repository/verificar.repository";
import { VerificarUseCases } from "../use-cases/verificar.usecases";

const verificarRepository: VerificarRepository = new VerificarApiRepository();
export const verificarUseCases = new VerificarUseCases(verificarRepository);