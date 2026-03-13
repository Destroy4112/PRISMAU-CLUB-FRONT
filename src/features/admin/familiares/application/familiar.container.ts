import { FamiliarApiRepository } from "../data/familiar.api.repository";
import type { FamiliarRepository } from "../domain/familiar.repository";
import { FamiliarUseCases } from "./familiar.usecases";

const familiarRepository: FamiliarRepository = new FamiliarApiRepository();

export const familiarUseCases = new FamiliarUseCases(familiarRepository);