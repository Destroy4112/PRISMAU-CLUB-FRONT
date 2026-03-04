import { useAppQuery } from '@hooks/useStore';
import type { IContrato } from '@models/entities/Entity.model';
import type { PaginatedResponse } from '@models/response/Response.model';
import type { FiltersContrato } from '../types/contrato';
import { getContratos } from './contratos.service';

export default function apiQueryContrato() {

    const getContratosQuery = (page = 1, limit = 30, filters: FiltersContrato = {}) => {
        return useAppQuery<PaginatedResponse<IContrato>, Error>({
            queryKey: ['contratos', page, limit, JSON.stringify(filters)],
            queryFn: () => getContratos(page, limit, filters),
        })
    };

    return {
        getContratosQuery
    }
}
