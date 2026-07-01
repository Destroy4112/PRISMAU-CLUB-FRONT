import { EstadoApiRepository } from "../../data/repository/estado.api.repository";
import type { EstadoRepository } from "../../domain/repository/estado.repository";
import { EstadoUseCases } from "../use-case/estado.usecases";

const estadoRepository: EstadoRepository = new EstadoApiRepository();
export const estadoUseCases = new EstadoUseCases(estadoRepository);