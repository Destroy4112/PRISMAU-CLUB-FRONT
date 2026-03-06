import { ContratoApiRepository } from "../data/contrato.api.repository";
import type { ContratoRepository } from "../domain/contrato.repository";
import { ContratoUseCases } from "./contrato.usecases";

const contratoRepository: ContratoRepository = new ContratoApiRepository();

export const contratoUseCases = new ContratoUseCases(contratoRepository);