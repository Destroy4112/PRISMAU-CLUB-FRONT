import { useAppQuery } from '@hooks/useStore';
import { getUserByDocumento } from './busqueda.service';
import type { BusquedaUserResponse } from '../types/busquedaUser';

export default function apiQueryBusqueda() {

    const getUserQuery = (documento: string) => {
        return useAppQuery<BusquedaUserResponse, Error>({
            queryKey: ['busqueda', documento],
            queryFn: () => getUserByDocumento(documento),
            enabled: !!documento, refetchOnWindowFocus: false,
        });
    };

    return {
        getUserQuery
    }
}
