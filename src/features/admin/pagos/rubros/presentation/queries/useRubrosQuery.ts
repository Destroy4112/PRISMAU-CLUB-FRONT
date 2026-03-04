import { useAppQuery } from '@core/store/react-query/hooks'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { rubroUseCases } from '../../application/rubro.container'
import type { RubroFilter } from '../../domain/rubro.filters'
import type { Rubro } from '../../domain/rubro.model'
import { rubroKeys } from './rubro.keys'

export function useRubrosQuery(params: PageParams & { filters?: RubroFilter }) {
    return useAppQuery<PaginatedResponse<Rubro>, Error>({
        queryKey: rubroKeys.list(params),
        queryFn: () => rubroUseCases.getAll(params),
    })
}
