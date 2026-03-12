import { AsociadoApiRepository } from "../data/asociado.api.repository";
import type { AsociadoRepository } from "../domain/asociado.repository";
import { AsociadoUseCases } from "./asociado.usecases";

const asociadoRepository: AsociadoRepository = new AsociadoApiRepository();

export const asociadoUseCases = new AsociadoUseCases(asociadoRepository);