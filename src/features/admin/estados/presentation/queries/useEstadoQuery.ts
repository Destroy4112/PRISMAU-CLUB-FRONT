import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { estadoUseCases } from '../../application/container/estado.container'
import type { Estado } from '../../domain/models/estado.model'
import { estadoKeys } from './estado.keys'

export function useEstadoQuery(params: PageParams & FilterWithState) {
    return useAppQuery<PaginatedResponse<Estado>, Error>({
        queryKey: estadoKeys.lists(params),
        queryFn: () => estadoUseCases.getAll(params),
    })
}
