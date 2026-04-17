import { useAppQuery } from '@core/store/react-query/hooks'
import type { PageParams, PaginatedResponse } from '@shared/constants/response/Response.model'
import { administradorUseCases } from '../../application/administrador.container'
import type { AdministradorFilter } from '../../domain/models/administrador.filters'
import type { Administrador } from '../../domain/models/administrador.model'
import { administradorKeys } from './administrador.keys'

export function useAdministradorQuery(params: PageParams & { filters?: AdministradorFilter }) {
    return useAppQuery<PaginatedResponse<Administrador>, Error>({
        queryKey: administradorKeys.list(params),
        queryFn: () => administradorUseCases.getAll(params),
    })
}
