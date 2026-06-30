import { DisponibilidadApiRepository } from "../../data/repository/disponibilidad.api.repository";
import type { DisponibilidadRepository } from "../../domain/repository/disponibilidad.repository";
import { DisponibilidadUseCases } from "../use-case/disponibilidad.usecases";

const disponibilidadRepository: DisponibilidadRepository = new DisponibilidadApiRepository();
export const disponibilidadUseCases = new DisponibilidadUseCases(disponibilidadRepository);