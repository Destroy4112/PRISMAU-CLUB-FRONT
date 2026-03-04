import { http } from "@core/http/axios.instance";
import { ENDPOINTS } from "@shared/constants/endpoints/Endpoints.model";
import type { Dashboard } from "../domain/dashboard.model";
import type { DashboardRepository } from "../domain/dashboard.repository";
import type { DashboardDTO } from "./dashboard.dto";
import { dashboardDtoToDomain } from "./dashboard.mapper";

const URL = ENDPOINTS.DASHBOARD;

export class DashboardApiRepository implements DashboardRepository {

    async getStats(): Promise<Dashboard> {
        const res = await http.get<DashboardDTO>(`${URL}/stats`,);
        return dashboardDtoToDomain(res.data);
    }

}