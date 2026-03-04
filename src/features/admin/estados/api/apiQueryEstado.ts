import { useAppQuery } from '@hooks/useStore';
import type { IEstado } from '@models/entities/Entity.model';
import type { PaginatedResponse } from '@models/response/Response.model';
import type { FiltersEstado } from '../types/estado';
import { getEstados } from './estado.service';

export default function apiQueryEstado() {

    const getEstadosQuery = (page = 1, limit = 30, filters: FiltersEstado = {}) => {
        return useAppQuery<PaginatedResponse<IEstado>, Error>({
            queryKey: ['invitaciones', page, limit, JSON.stringify(filters)],
            queryFn: () => getEstados(page, limit, filters),
        });
    }

    return {
        getEstadosQuery
    }
}
