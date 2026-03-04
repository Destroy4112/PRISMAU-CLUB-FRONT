import type { Dashboard } from "./dashboard.model";

export interface DashboardRepository {
    getStats(): Promise<Dashboard>;
}