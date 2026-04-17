import { SolicitudApiRepository } from "../data/repository/solicitud.api.repository";
import type { SolicitudRepository } from "../domain/repository/solicitud.repository";
import { SolicitudUseCases } from "./use-cases/solicitud.usecases";

const solicitudRepository: SolicitudRepository = new SolicitudApiRepository();
export const solicitudUseCases = new SolicitudUseCases(solicitudRepository);