import { RespuestaEncuestaApiRepository } from "../../data/repository/respuesta-encuesta.api.repository";
import type { RespuestaEncuestaRepository } from "../../domain/repository/respuesta-encuesta.repository";
import { RespuestaEncuestaUseCases } from "../use-case/respuesta-encuesta.usecases";

const respuestaEncuestaRepository: RespuestaEncuestaRepository = new RespuestaEncuestaApiRepository();
export const respuestaEncuestaUseCases = new RespuestaEncuestaUseCases(respuestaEncuestaRepository);