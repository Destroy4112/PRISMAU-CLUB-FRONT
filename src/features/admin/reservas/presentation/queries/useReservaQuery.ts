import { useAppQuery } from '@core/store/react-query/hooks'
import type { Filter } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { reservaUseCases } from '../../application/container/reserva.container'
import type { Reserva } from '../../domain/model/reserva.model'
import { reservaKeys } from './reserva.keys'

export function useReservaQuery(params: PageParams & Filter) {
   return useAppQuery<PaginatedResponse<Reserva>, Error>({
      queryKey: reservaKeys.list(params),
      queryFn: () => reservaUseCases.getAll(params),
   })
}
