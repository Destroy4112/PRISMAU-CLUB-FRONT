import { AsociadoApiRepository } from "../../data/repository/asociado.api.repository";
import type { AsociadoRepository } from "../../domain/repository/asociado.repository";
import { AsociadoUseCases } from "../use-case/asociado.usecases";

const asociadoRepository: AsociadoRepository = new AsociadoApiRepository();
export const asociadoUseCases = new AsociadoUseCases(asociadoRepository);