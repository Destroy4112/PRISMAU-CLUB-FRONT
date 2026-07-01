import { AccesoApiRepository } from "../../data/repository/acceso.api.repository";
import type { AccesoRepository } from "../../domain/repository/acceso.repository";
import { AccesoUseCases } from "../use-case/acceso.usecases";

const accesoRepository: AccesoRepository = new AccesoApiRepository();
export const accesoUseCases = new AccesoUseCases(accesoRepository);