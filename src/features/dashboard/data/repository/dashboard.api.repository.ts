import { ENDPOINTS } from "@core/constants/endpoints";
import { http } from "@core/http/axios.instance";
import type { Dashboard } from "../../domain/model/dashboard.model";
import type { DashboardRepository } from "../../domain/dashboard.repository";
import type { DashboardDTO } from "../dto/dashboard.dto";
import { dashboardDtoToDomain } from "../mapper/dashboard.mapper";

const URL = ENDPOINTS.DASHBOARD;

export class DashboardApiRepository implements DashboardRepository {

   async getStats(): Promise<Dashboard> {
      const res = await http.get<DashboardDTO>(`${URL}/stats`,);
      return dashboardDtoToDomain(res.data);
   }

}