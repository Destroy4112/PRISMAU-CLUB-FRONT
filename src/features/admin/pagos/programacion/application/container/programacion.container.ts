import { ProgramacionApiRepository } from "../../data/repository/programacion.api.repository.ts";
import type { ProgramacionRepository } from "../../domain/repository/programacion.repository.ts";
import { ProgramacionUseCases } from "../use-case/programacion.usecases.ts";

export const programacionRepository: ProgramacionRepository = new ProgramacionApiRepository();
export const programacionUseCases = new ProgramacionUseCases(programacionRepository);