import { InvitacionApiRepository } from "../../data/repository/invitacion.api.repository";
import type { InvitacionRepository } from "../../domain/repository/invitacion.repository";
import { InvitacionUseCases } from "../use-case/invitacion.usecases";

const invitacionRepository: InvitacionRepository = new InvitacionApiRepository();
export const invitacionUseCases = new InvitacionUseCases(invitacionRepository);