import { ReservaApiRepository } from "../data/reserva.api.repository";
import type { ReservaRepository } from "../domain/reserva.repository";
import { ReservaUseCases } from "./reserva.usecases";

const reservaRepository: ReservaRepository = new ReservaApiRepository();

export const reservaUseCases = new ReservaUseCases(reservaRepository);