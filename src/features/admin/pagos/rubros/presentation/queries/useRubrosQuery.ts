import { useAppQuery } from '@core/store/react-query/hooks'
import type { Filter } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { rubroUseCases } from '../../application/container/rubro.container'
import type { Rubro } from '../../domain/model/rubro.model'
import { rubroKeys } from './rubro.keys'

export function useRubrosQuery(params: PageParams & Filter) {
   return useAppQuery<PaginatedResponse<Rubro>, Error>({
      queryKey: rubroKeys.list(params),
      queryFn: () => rubroUseCases.getPaginated(params),
   })
}
