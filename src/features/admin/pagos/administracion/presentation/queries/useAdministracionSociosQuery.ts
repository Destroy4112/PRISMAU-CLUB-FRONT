import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { administracionUseCases } from '../../application/container/administracion.container'
import type { Socio } from '../../domain/models/socio.model'
import { administracionKeys } from './administracion.keys'

export function useAdministracionSociosQuery(params: PageParams & FilterWithState) {
   return useAppQuery<PaginatedResponse<Socio>, Error>({
      queryKey: administracionKeys.lists(params),
      queryFn: () => administracionUseCases.getSocios(params),
   })
}
