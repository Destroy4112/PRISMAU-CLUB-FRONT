import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { empleadoUseCases } from '../../application/container/empleado.container'
import type { Empleado } from '../../domain/model/empleado.model'
import { empleadoKeys } from './empleado.keys'

export function useEmpleadoQuery(params: PageParams & FilterWithState) {
   return useAppQuery<PaginatedResponse<Empleado>, Error>({
      queryKey: empleadoKeys.list(params),
      queryFn: () => empleadoUseCases.getAll(params),
   })
}
