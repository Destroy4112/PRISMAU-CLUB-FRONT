import { useAppQuery } from '@hooks/useStore';
import type { IInvitacion } from '@models/entities/Entity.model';
import type { PaginatedResponse } from '@models/response/Response.model';
import type { FiltersInvitacion } from '../types/invitacion';
import { getInvitaciones } from './invitacion.service';

export default function apiQueryInvitacion() {

    const getInvitacionesQuery = (page = 1, limit = 30, filters: FiltersInvitacion = {}) => {
        return useAppQuery<PaginatedResponse<IInvitacion>, Error>({
            queryKey: ['invitaciones', page, limit, JSON.stringify(filters)],
            queryFn: () => getInvitaciones(page, limit, filters),
        });
    }

    return {
        getInvitacionesQuery
    }
}
