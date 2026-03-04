import { ProgramacionApiRepository } from "../data/programacion.api";
import type { ProgramacionRepository } from "../domain/programacion.repository";
import { ProgramacionUseCases } from "./programacion.usecases";

export const programacionRepository: ProgramacionRepository = new ProgramacionApiRepository();
export const programacionUseCases = new ProgramacionUseCases(programacionRepository);