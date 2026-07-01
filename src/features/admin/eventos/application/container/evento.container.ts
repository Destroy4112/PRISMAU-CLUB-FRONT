import { EventoApiRepository } from "../../data/repository/evento.api.repository";
import type { EventoRepository } from "../../domain/repository/evento.repository";
import { EventoUseCases } from "../use-case/evento.usecases";

const eventoRepository: EventoRepository = new EventoApiRepository();
export const eventoUseCases = new EventoUseCases(eventoRepository);