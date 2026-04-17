import { MenuApiRepository } from "../data/repository/menu.api.repository";
import type { MenuRepository } from "../domain/repository/menu.repository";
import { MenuUseCases } from "./use-case/menu.usecases";

const menuRepository: MenuRepository = new MenuApiRepository();
export const menuUseCases = new MenuUseCases(menuRepository);