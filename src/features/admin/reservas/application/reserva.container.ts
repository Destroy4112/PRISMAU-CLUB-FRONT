import { ReservaApiRepository } from "../data/repository/reserva.api.repository";
import type { ReservaRepository } from "../domain/repository/reserva.repository";
import { ReservaUseCases } from "./use-case/reserva.usecases";

const reservaRepository: ReservaRepository = new ReservaApiRepository();
export const reservaUseCases = new ReservaUseCases(reservaRepository);