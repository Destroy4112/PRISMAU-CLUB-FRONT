import { MenuRolApiRepository } from "../data/repository/menu-rol.api.repository";
import type { MenuRolRepository } from "../domain/repository/menu-rol.repository";
import { MenuRolUseCases } from "./use-case/menu-rol.usecases";

const menuRolRepository: MenuRolRepository = new MenuRolApiRepository();
export const menuRolUseCases = new MenuRolUseCases(menuRolRepository);