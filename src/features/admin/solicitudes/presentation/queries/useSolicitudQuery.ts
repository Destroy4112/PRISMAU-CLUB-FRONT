import { useAppQuery } from '@core/store/react-query/hooks'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { solicitudUseCases } from '../../application/solicitud.container'
import type { SolicitudFilter } from '../../domain/models/solicitud.filters'
import type { Solicitud } from '../../domain/models/solicitud.model'
import { solicitudKeys } from './solicitud.keys'

export function useSolicitudQuery(params: PageParams & { filters?: SolicitudFilter }) {
    return useAppQuery<PaginatedResponse<Solicitud>, Error>({
        queryKey: solicitudKeys.list(params),
        queryFn: () => solicitudUseCases.getAll(params),
    })
}
