import { useAppQuery } from '@core/store/react-query/hooks'
import { asociadoUseCases } from '@features/admin/asociados/application/container/asociado.container'
import type { Asociado } from '@features/admin/asociados/domain/model/asociado.model'
import { adherenteKeys } from './adherente.keys'

export function useAdherenteAsociadoQuery() {
   return useAppQuery<Asociado[], Error>({
      queryKey: adherenteKeys.asociados(),
      queryFn: () => asociadoUseCases.getAsociados(),
   })
}
