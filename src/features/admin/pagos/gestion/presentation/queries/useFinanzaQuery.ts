import { useAppQuery } from '@core/store/react-query/hooks'
import { finanzaUseCase } from '../../application/container/finanza.container'
import type { Finanza } from '../../domain/model/finanza.model'
import { finanzaKeys } from './finanza.keys'

export function useFinanzaQuery() {
    return useAppQuery<Finanza, Error>({
        queryKey: finanzaKeys.all,
        queryFn: () => finanzaUseCase.getFinanza(),
    })
}
