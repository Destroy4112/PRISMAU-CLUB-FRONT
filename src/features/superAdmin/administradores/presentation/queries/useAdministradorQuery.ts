import { useAppQuery } from '@core/store/react-query/hooks'
import type { Filter } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { administradorUseCases } from '../../application/container/administrador.container'
import type { Administrador } from '../../domain/models/administrador.model'
import { administradorKeys } from './administrador.keys'

export function useAdministradorQuery(params: PageParams & Filter) {
   return useAppQuery<PaginatedResponse<Administrador>, Error>({
      queryKey: administradorKeys.list(params),
      queryFn: () => administradorUseCases.getAll(params),
   })
}
