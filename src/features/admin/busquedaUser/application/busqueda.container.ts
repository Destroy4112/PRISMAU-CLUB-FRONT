import { BusquedaApiRepository } from "../data/busqueda.api.repository";
import type { BusquedaRepository } from "../domain/busqueda.repository";
import { BusquedaUseCases } from "./busqueda.usecases";

const busquedaRepository: BusquedaRepository = new BusquedaApiRepository();

export const busquedaUseCases = new BusquedaUseCases(busquedaRepository);