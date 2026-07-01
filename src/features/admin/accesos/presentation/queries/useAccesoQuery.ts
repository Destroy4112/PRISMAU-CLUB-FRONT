import { useAppQuery } from '@core/store/react-query/hooks'
import type { Filter } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { accesoUseCases } from '../../application/container/acceso.container'
import type { Acceso } from '../../domain/models/acceso.model'
import { accesoKeys } from './acceso.keys'

export function useAccesoQuery(params: PageParams & Filter) {
    return useAppQuery<PaginatedResponse<Acceso>, Error>({
        queryKey: accesoKeys.lists(params),
        queryFn: () => accesoUseCases.getAll(params),
    })
}
