import { AdherenteApiRepository } from "../../data/repository/adherente.api.repository";
import type { AdherenteRepository } from "../../domain/repository/adherente.repository";
import { AdherenteUseCases } from "../use-case/adherente.usecases";

const adherenteRepository: AdherenteRepository = new AdherenteApiRepository();
export const adherenteUseCases = new AdherenteUseCases(adherenteRepository);