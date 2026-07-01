import { useAppQuery } from '@core/store/react-query/hooks'
import { eventoUseCases } from '../../application/container/evento.container'
import type { Evento } from '../../domain/model/evento.model'
import { eventoKeys } from './evento.keys'

export function useEventoQuery() {
    return useAppQuery<Evento[], Error>({
        queryKey: eventoKeys.all,
        queryFn: () => eventoUseCases.getAll(),
    })
}
