import { PreguntaApiRepository } from "../data/repository/pregunta.api.repository";
import type { PreguntaRepository } from "../domain/repository/pregunta.repository";
import { PreguntaUseCases } from "./use-case/pregunta.usecases";

const preguntaRepository: PreguntaRepository = new PreguntaApiRepository();
export const preguntaUseCases = new PreguntaUseCases(preguntaRepository);