import { useAppQuery } from '@core/store/react-query/hooks'
import type { Filter } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { invitacionUseCases } from '../../application/container/invitacion.container'
import type { Invitacion } from '../../domain/models/invitacion.model'
import { invitacionKeys } from './invitacion.keys'

export function useInvitacionQuery(params: PageParams & Filter) {
   return useAppQuery<PaginatedResponse<Invitacion>, Error>({
      queryKey: invitacionKeys.lists(params),
      queryFn: () => invitacionUseCases.getAll(params),
   })
}
