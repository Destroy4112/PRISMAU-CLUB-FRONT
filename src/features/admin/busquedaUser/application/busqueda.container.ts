import { BusquedaUserApiRepository } from "../data/repository/busqueda-user.api.repository";
import type { BusquedaUserRepository } from "../domain/repository/busqueda-user.repository";
import { BusquedaUserUseCases } from "./use-case/busqueda-user.usecases";

const busquedaUserRepository: BusquedaUserRepository = new BusquedaUserApiRepository();
export const busquedaUserUseCases = new BusquedaUserUseCases(busquedaUserRepository);