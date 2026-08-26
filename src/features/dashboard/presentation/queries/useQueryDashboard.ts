import { useAppQuery } from '@core/store/react-query/hooks';
import { dashboardUseCases } from '@features/dashboard/application/container/dashboard.container';
import type { Dashboard } from '@features/dashboard/domain/model/dashboard.model';

export default function useQueryDashboard() {
   return useAppQuery<Dashboard, Error>({
      queryKey: ['dashboard-stats'],
      queryFn: () => dashboardUseCases.getStats(),
   });

}
