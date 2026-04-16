import { CambiarApiRepository } from "../data/repository/cambiar.api.repository";
import type { CambiarRepository } from "../domain/repository/cambiar.repository";
import { CambiarUseCases } from "./use-cases/cambiar.usecases";

const cambiarRepository: CambiarRepository = new CambiarApiRepository();
export const cambiarUseCases = new CambiarUseCases(cambiarRepository);