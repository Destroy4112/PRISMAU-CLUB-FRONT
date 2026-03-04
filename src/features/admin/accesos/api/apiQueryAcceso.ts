import { useAppQuery } from '@hooks/useStore';
import type { IAcceso } from '@models/entities/Entity.model';
import type { PaginatedResponse } from '@models/response/Response.model';
import type { FiltersAcceso } from '../types/acceso';
import { getAccesos } from './acceso.service';

export default function apiQueryAcceso() {

    const getAccesosQuery = (page = 1, limit = 30, filters: FiltersAcceso = {}) => {
        return useAppQuery<PaginatedResponse<IAcceso>, Error>({
            queryKey: ['invitaciones', page, limit, JSON.stringify(filters)],
            queryFn: () => getAccesos(page, limit, filters),
        });
    }

    return {
        getAccesosQuery
    }
}
