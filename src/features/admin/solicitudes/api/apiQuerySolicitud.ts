import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { ISolicitud } from '@models/entities/Entity.model';
import type { ApiResponse, PaginatedResponse } from '@models/response/Response.model';
import type { IFilterSolicitud } from '../types/solicitud';
import { getSolicitudes, responderSolicitud } from './solicitud.service';

export default function apiQuerySolicitud() {

    const queryClient = useAppQueryClient();

    const getSolicitudesQuery = (page = 1, limit = 30, filters: IFilterSolicitud = {}) => {
        return useAppQuery<PaginatedResponse<ISolicitud>, Error>({
            queryKey: ['solicitudes', page, limit, JSON.stringify(filters)],
            queryFn: () => getSolicitudes(page, limit, filters),
        });
    }

    const { mutate: responderMutation, isPending: isResponding } = useAppMutation<ApiResponse<ISolicitud>, Error, ISolicitud>({
        mutationFn: responderSolicitud,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['solicitudes'] }); }
    });

    return {
        isResponding,
        getSolicitudesQuery,
        responderMutation,
    }
}
