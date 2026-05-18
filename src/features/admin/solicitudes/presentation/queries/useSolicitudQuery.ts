import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { solicitudUseCases } from '../../application/container/solicitud.container'
import type { Solicitud } from '../../domain/models/solicitud.model'
import { solicitudKeys } from './solicitud.keys'

export function useSolicitudQuery(params: PageParams & FilterWithState) {
    return useAppQuery<PaginatedResponse<Solicitud>, Error>({
        queryKey: solicitudKeys.list(params),
        queryFn: () => solicitudUseCases.getAll(params),
    })
}
