import { DashboardApiRepository } from "../data/dashboard.api.repository";
import type { DashboardRepository } from "../domain/dashboard.repository";
import { DashboardUseCases } from "./dashboard.usecases";

const dashboardRepository: DashboardRepository = new DashboardApiRepository();

export const dashboardUseCases = new DashboardUseCases(dashboardRepository);