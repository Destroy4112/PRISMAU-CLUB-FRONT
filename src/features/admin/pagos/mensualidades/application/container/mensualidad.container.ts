import { MensualidadApiRepository } from "../../data/repository/mensualidad.api.repository";
import type { MensualidadRepository } from "../../domain/repository/mensualidad.repository";
import { MensualidadUseCases } from "../use-case/mensualidad.usecases";

const mensualidadRepository: MensualidadRepository = new MensualidadApiRepository();
export const mensualidadUseCases = new MensualidadUseCases(mensualidadRepository);