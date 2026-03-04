import { MenuRolApiRepository } from "../data/menu-rol.api.repository";
import type { MenuRolRepository } from "../domain/menu-rol.repository";
import { MenuRolUseCases } from "./menu.usecases";

const menuRolRepository: MenuRolRepository = new MenuRolApiRepository();

export const menuRolUseCases = new MenuRolUseCases(menuRolRepository);