import type { Dashboard } from "../../domain/model/dashboard.model";
import type { DashboardRepository } from "../../domain/dashboard.repository";

export class DashboardUseCases {

   private readonly repo: DashboardRepository;

   constructor(repo: DashboardRepository) {
      this.repo = repo;
   }

   getStats(): Promise<Dashboard> {
      return this.repo.getStats();
   }

}
