import { OptionApiRepository } from "../../data/repository/option.api.repository";
import type { OptionRepository } from "../../domain/repository/option.repository";
import { OptionUseCases } from "../use-case/option.usecases";

const optionRepository: OptionRepository = new OptionApiRepository();
export const optionUseCases = new OptionUseCases(optionRepository);