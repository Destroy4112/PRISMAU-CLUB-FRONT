import type { Dashboard } from "../model/dashboard.model";

export interface DashboardRepository {
   getStats(): Promise<Dashboard>;
}