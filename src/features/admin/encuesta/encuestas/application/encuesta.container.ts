import { EncuestaApiRepository } from "../data/encuesta.api.repository";
import type { EncuestaRepository } from "../domain/encuesta.repository";
import { EncuestaUseCases } from "./encuesta.usecases";

const encuestaRepository: EncuestaRepository = new EncuestaApiRepository();

export const encuestaUseCases = new EncuestaUseCases(encuestaRepository);