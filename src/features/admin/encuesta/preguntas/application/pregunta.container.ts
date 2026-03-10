import { PreguntaApiRepository } from "../data/pregunta.api.repository";
import type { PreguntaRepository } from "../domain/pregunta.repository";
import { PreguntaUseCases } from "./pregunta.usecases";

const preguntaRepository: PreguntaRepository = new PreguntaApiRepository();

export const preguntaUseCases = new PreguntaUseCases(preguntaRepository);