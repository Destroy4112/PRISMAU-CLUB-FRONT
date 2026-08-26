import { DashboardApiRepository } from "../../data/repository/dashboard.api.repository";
import type { DashboardRepository } from "../../domain/dashboard.repository";
import { DashboardUseCases } from "../use-cases/dashboard.usecases";

const dashboardRepository: DashboardRepository = new DashboardApiRepository();
export const dashboardUseCases = new DashboardUseCases(dashboardRepository);