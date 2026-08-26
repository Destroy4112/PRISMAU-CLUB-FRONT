import { useAppQuery } from '@core/store/react-query/hooks'
import { rubroUseCases } from '@features/admin/pagos/rubros/application/container/rubro.container'
import type { Rubro } from '@features/admin/pagos/rubros/domain/model/rubro.model'
import { programacionKeys } from './programacion.keys'

export function useRubrosProgramacionQuery() {
   return useAppQuery<Rubro[], Error>({
      queryKey: programacionKeys.rubros(),
      queryFn: () => rubroUseCases.getAll(),
   })
}
