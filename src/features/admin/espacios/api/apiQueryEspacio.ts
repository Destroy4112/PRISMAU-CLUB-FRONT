import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { IEspacio } from '@models/entities/Entity.model';
import type { ApiResponse, ApiResponseVoid } from '@models/response/Response.model';
import type { EspacioImagen, FilterEspacio } from '../types/espacio';
import { changeImagenEspacio, createEspacio, deleteEspacio, getEspacios, updateEspacio } from './espacio.service';

export default function apiQueryEspacio() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ==============================

    const { mutate: createEspacioMutation, isPending: isCreating } = useAppMutation<ApiResponse<IEspacio>, Error, IEspacio>({
        mutationFn: createEspacio,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    //=========== CONSULTAR ==========================

    const getEspaciosQuery = (page: number, limit: number, filters: FilterEspacio = {}) => {
        return useAppQuery({
            queryKey: ['empleados', page, limit, JSON.stringify(filters)],
            queryFn: () => getEspacios(page, limit, filters),
            refetchOnWindowFocus: false,
        });
    };

    //=========== EDITAR ==============================

    const { mutate: actualizarEspacioMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IEspacio>({
        mutationFn: updateEspacio,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    //=========== ACTUALIZAR IMAGEN =====================

    const { mutate: actualizarImagenMutation, isPending: isUpdatingImagen } = useAppMutation<ApiResponseVoid, Error, EspacioImagen>({
        mutationFn: ({ id, imagen }) => changeImagenEspacio(id, imagen),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    //=========== ELIMINAR ==============================

    const { mutate: eliminarEspacioMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteEspacio,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    return {
        isCreating,
        isUpdating,
        isUpdatingImagen,
        getEspaciosQuery,
        createEspacioMutation,
        actualizarEspacioMutation,
        actualizarImagenMutation,
        eliminarEspacioMutation,
    }
}
