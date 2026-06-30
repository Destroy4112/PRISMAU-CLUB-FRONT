import { EspacioApiRepository } from "../../data/repository/espacio.api.repository";
import type { EspacioRepository } from "../../domain/repository/espacio.repository";
import { EspacioUseCases } from "../use-case/espacio.usecases";

const espacioRepository: EspacioRepository = new EspacioApiRepository();
export const espacioUseCases = new EspacioUseCases(espacioRepository);