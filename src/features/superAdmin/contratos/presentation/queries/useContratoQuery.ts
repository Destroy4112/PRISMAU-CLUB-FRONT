import { useAppQuery } from '@core/store/react-query/hooks'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { contratoUseCases } from '../../application/contrato.container'
import type { ContratoFilter } from '../../domain/models/contrato.filters'
import type { Contrato } from '../../domain/models/contrato.model'
import { contratoKeys } from './contrato.keys'

export function useContratoQuery(params: PageParams & { filters?: ContratoFilter }) {
    return useAppQuery<PaginatedResponse<Contrato>, Error>({
        queryKey: contratoKeys.list(params),
        queryFn: () => contratoUseCases.getAll(params),
    })
}
