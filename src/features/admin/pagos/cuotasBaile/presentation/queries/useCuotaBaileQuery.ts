import { useAppQuery } from '@core/store/react-query/hooks'
import type { FilterWithState } from '@shared/constants/filters/filters.constant'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { cuotaBaileUseCases } from '../../application/container/cuotaBaile.container'
import type { CuotaBaile } from '../../domain/models/cuotaBaile.model'
import type { CuotaBaileStats } from '../../domain/models/cuotaBaile.response.model'
import { cuotaBaileKeys } from './cuotaBaile.keys'

export function useCuotaBaileQuery(documento: string, params: PageParams & FilterWithState) {
   return useAppQuery<PaginatedResponse<CuotaBaile, CuotaBaileStats>, Error>({
      queryKey: cuotaBaileKeys.lists(params),
      queryFn: () => cuotaBaileUseCases.get(documento, params),
   })
}
