import { useAppQuery } from '@core/store/react-query/hooks'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { asociadoUseCases } from '../../application/container/asociado.container'
import type { AsociadoFilter } from '../../application/contracts/asociado.filters'
import type { Asociado } from '../../domain/model/asociado.model'
import { asociadoKeys } from './asociado.keys'

export function useAsociadoQuery(params: PageParams & { filters?: AsociadoFilter }) {
    return useAppQuery<PaginatedResponse<Asociado>, Error>({
        queryKey: asociadoKeys.list(params),
        queryFn: () => asociadoUseCases.getAll(params),
    })
}
