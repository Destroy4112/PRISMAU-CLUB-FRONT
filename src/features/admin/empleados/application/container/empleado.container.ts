import { EmpleadoApiRepository } from "../../data/repository/empleado.api.repository";
import type { EmpleadoRepository } from "../../domain/repository/empleado.repository";
import { EmpleadoUseCases } from "../use-case/empleado.usecases";

const empleadoRepository: EmpleadoRepository = new EmpleadoApiRepository();
export const empleadoUseCases = new EmpleadoUseCases(empleadoRepository);