import { SolicitudApiRepository } from "../data/solicitud.api.repository";
import type { SolicitudRepository } from "../domain/solicitud.repository";
import { SolicitudUseCases } from "./solicitud.usecases";

const solicitudRepository: SolicitudRepository = new SolicitudApiRepository();

export const solicitudUseCases = new SolicitudUseCases(solicitudRepository);