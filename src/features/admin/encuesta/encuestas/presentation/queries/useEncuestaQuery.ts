import { useAppQuery } from '@core/store/react-query/hooks'
import { encuestaUseCases } from '../../application/encuesta.container'
import type { Encuesta } from '../../domain/encuesta.model'
import { encuestaKeys } from './encuesta.keys'

export function useEncuestaQuery() {
    return useAppQuery<Encuesta[], Error>({
        queryKey: encuestaKeys.list(),
        queryFn: () => encuestaUseCases.getAll(),
    })
}
