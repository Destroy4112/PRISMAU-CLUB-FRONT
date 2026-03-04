import { useAppQuery } from '@hooks/useStore';
import type { IReserva } from '@models/entities/Entity.model';
import type { PaginatedResponse } from '@models/response/Response.model';
import type { IFilterReserva } from '../types/reserva';
import { getReservas } from './reserva.service';

export default function apiQueryReserva() {

    const getReservasQuery = (page = 1, limit = 30, filters: IFilterReserva = {}) => {
        return useAppQuery<PaginatedResponse<IReserva>, Error>({
            queryKey: ['reservas', page, limit, JSON.stringify(filters)],
            queryFn: () => getReservas(page, limit, filters),
        });
    };

    return {
        getReservasQuery
    }
}
