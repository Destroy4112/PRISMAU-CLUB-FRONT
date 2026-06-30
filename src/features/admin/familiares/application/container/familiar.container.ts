import { FamiliarApiRepository } from "../../data/repository/familiar.api.repository";
import type { FamiliarRepository } from "../../domain/repository/familiar.repository";
import { FamiliarUseCases } from "../use-case/familiar.usecases";

const familiarRepository: FamiliarRepository = new FamiliarApiRepository();
export const familiarUseCases = new FamiliarUseCases(familiarRepository);