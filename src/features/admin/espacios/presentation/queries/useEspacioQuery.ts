import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { espacioUseCases } from '../../application/container/espacio.container'
import type { Espacio } from '../../domain/model/espacio.model'
import { espacioKeys } from './espacio.keys'

export function useEspacioQuery(params: PageParams & FilterWithState) {
   return useAppQuery<PaginatedResponse<Espacio>, Error>({
      queryKey: espacioKeys.list(params),
      queryFn: () => espacioUseCases.getAll(params),
   })
}
