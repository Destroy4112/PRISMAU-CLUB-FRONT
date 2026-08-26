import { RecuperarApiRepository } from "../../data/repository/recuperar.api.repository";
import type { RecuperarRepository } from "../../domain/repository/recuperar.repository";
import { RecuperarUseCases } from "../use-cases/recuperar.usecases";

const recuperarRepository: RecuperarRepository = new RecuperarApiRepository();
export const recuperarUseCases = new RecuperarUseCases(recuperarRepository);