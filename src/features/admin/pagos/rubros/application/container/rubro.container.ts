import type { RubroRepository } from "../../domain/repository/rubro.repository";
import { RubroUseCases } from '../use-case/rubro.usecases';
import { RubroApiRepository } from './../../data/repository/rubro.api.repository';

const rubroRepository: RubroRepository = new RubroApiRepository();
export const rubroUseCases = new RubroUseCases(rubroRepository);