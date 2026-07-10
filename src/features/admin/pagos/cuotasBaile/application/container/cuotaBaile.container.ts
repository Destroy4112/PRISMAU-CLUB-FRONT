import { CuotaBaileApiRepository } from "../../data/repository/cuotaBaile.api.repository";
import type { CuotaBaileRepository } from "../../domain/repository/cuotaBaile.repository";
import { CuotaBaileUseCases } from "../use-case/cuotaBaile.usecases";

const cuotaBaileRepository: CuotaBaileRepository = new CuotaBaileApiRepository();
export const cuotaBaileUseCases = new CuotaBaileUseCases(cuotaBaileRepository);