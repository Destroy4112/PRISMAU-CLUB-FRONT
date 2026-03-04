import { MenuApiRepository } from "../data/menu.api.repository";
import type { MenuRepository } from "../domain/menu.repository";
import { MenuUseCases } from "./menu.usecases";

const menuRepository: MenuRepository = new MenuApiRepository();

export const menuUseCases = new MenuUseCases(menuRepository);