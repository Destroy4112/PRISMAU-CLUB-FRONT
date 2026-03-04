import { RubroApiRepository } from "../data/rubro.api.repository";
import type { RubroRepository } from "../domain/rubro.repository";
import { RubroUseCases } from "./rubro.usecases";

const rubroRepository: RubroRepository = new RubroApiRepository();

export const rubroUseCases = new RubroUseCases(rubroRepository);