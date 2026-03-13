import { useAppQuery } from '@core/store/react-query/hooks'
import { familiarUseCases } from '../../application/familiar.container'
import type { Familiar } from '../../domain/familiar.model'
import { familiarKeys } from './familiar.keys'

export function useFamiliarQuery(id: number, rol: string) {
    return useAppQuery<Familiar[], Error>({
        queryKey: familiarKeys.list(id, rol),
        queryFn: () => familiarUseCases.getAll(id, rol),
    })
}
