import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { adherenteUseCases } from '../../application/container/adherente.container'
import type { Adherente } from '../../domain/model/adherente.model'
import { adherenteKeys } from './adherente.keys'

export function useAdherenteQuery(params: PageParams & FilterWithState) {
   return useAppQuery<PaginatedResponse<Adherente>, Error>({
      queryKey: adherenteKeys.list(params),
      queryFn: () => adherenteUseCases.getAll(params),
   })
}
