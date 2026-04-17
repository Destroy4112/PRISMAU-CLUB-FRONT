import { useAppQuery } from '@core/store/react-query/hooks'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { reservaUseCases } from '../../application/reserva.container'
import type { ReservaFilter } from '../../domain/model/reserva.filters'
import type { Reserva } from '../../domain/model/reserva.model'
import { reservaKeys } from './reserva.keys'

export function useReservaQuery(params: PageParams & { filters?: ReservaFilter }) {
    return useAppQuery<PaginatedResponse<Reserva>, Error>({
        queryKey: reservaKeys.list(params),
        queryFn: () => reservaUseCases.getAll(params),
    })
}
