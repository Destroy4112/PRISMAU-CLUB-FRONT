import { useAppQuery } from '@core/store/react-query/hooks'
import type { Filter } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { contratoUseCases } from '../../application/container/contrato.container'
import type { Contrato } from '../../domain/models/contrato.model'
import { contratoKeys } from './contrato.keys'

export function useContratoQuery(params: PageParams & Filter) {
   return useAppQuery<PaginatedResponse<Contrato>, Error>({
      queryKey: contratoKeys.lists(params),
      queryFn: () => contratoUseCases.getAll(params),
   })
}
