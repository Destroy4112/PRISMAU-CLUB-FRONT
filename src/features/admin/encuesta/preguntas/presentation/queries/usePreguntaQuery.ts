import { useAppQuery } from '@core/store/react-query/hooks'
import { preguntaUseCases } from '../../application/container/pregunta.container'
import type { Pregunta, PreguntaId } from '../../domain/model/pregunta.model'
import { preguntaKeys } from './pregunta.keys'

export function usePreguntaQuery(id: PreguntaId) {
   return useAppQuery<Pregunta[], Error>({
      queryKey: preguntaKeys.detail(id),
      queryFn: () => preguntaUseCases.getAll(id),
   })
}
