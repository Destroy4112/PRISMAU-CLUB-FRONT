import { FinanzaApiRepository } from "../../data/repository/finanza.api.repository";
import type { FinanzaRepository } from "../../domain/repository/finanza.repository";
import { FinanzaUseCases } from "../use-case/finanza.use-case";

const repository: FinanzaRepository = new FinanzaApiRepository();
export const finanzaUseCase = new FinanzaUseCases(repository);