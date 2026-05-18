import { useAppQuery } from '@core/store/react-query/hooks'
import { encuestaUseCases } from '../../application/container/encuesta.container'
import type { Encuesta } from '../../domain/model/encuesta.model'
import { encuestaKeys } from './encuesta.keys'

export function useEncuestaQuery() {
    return useAppQuery<Encuesta[], Error>({
        queryKey: encuestaKeys.all(),
        queryFn: () => encuestaUseCases.getAll(),
    })
}
