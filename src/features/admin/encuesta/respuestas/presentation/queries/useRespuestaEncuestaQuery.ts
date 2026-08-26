import { useAppQuery } from '@core/store/react-query/hooks'
import { respuestaEncuestaUseCases } from '../../application/container/pregunta.container'
import type { RespuestaEncuesta } from '../../domain/model/respuesta-encuesta.model'
import { respuestaEncuestaKeys } from './respuesta-encuesta.keys'

export function useRespuestaEncuestaQuery(id: number) {
   return useAppQuery<RespuestaEncuesta[], Error>({
      queryKey: respuestaEncuestaKeys.detail(id),
      queryFn: () => respuestaEncuestaUseCases.getAll(id),
   })
}
