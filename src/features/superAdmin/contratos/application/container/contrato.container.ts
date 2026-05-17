import { ContratoApiRepository } from "../../data/repository/contrato.api.repository";
import type { ContratoRepository } from "../../domain/repository/contrato.repository";
import { ContratoUseCases } from "../use-case/contrato.usecases";

const contratoRepository: ContratoRepository = new ContratoApiRepository();

export const contratoUseCases = new ContratoUseCases(contratoRepository);