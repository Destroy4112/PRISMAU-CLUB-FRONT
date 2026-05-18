import { EncuestaApiRepository } from "../../data/repository/encuesta.api.repository";
import type { EncuestaRepository } from "../../domain/repository/encuesta.repository";
import { EncuestaUseCases } from "../use-case/encuesta.usecases";

const encuestaRepository: EncuestaRepository = new EncuestaApiRepository();
export const encuestaUseCases = new EncuestaUseCases(encuestaRepository);