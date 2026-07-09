import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { mensualidadUseCases } from '../../application/container/mensualidad.container'
import type { Mensualidad } from '../../domain/models/mensualidad.model'
import { mensualidadKeys } from './mensualidad.keys'

export function useMensualidadQuery(documento: string, params: PageParams & FilterWithState) {
    return useAppQuery<PaginatedResponse<Mensualidad>, Error>({
        queryKey: mensualidadKeys.lists(params),
        queryFn: () => mensualidadUseCases.get(documento, params),
    })
}
