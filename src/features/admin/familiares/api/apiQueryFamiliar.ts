import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { ApiResponse, ApiResponseVoid } from '@models/response/Response.model';
import type { IFamiliar } from '@models/usuario/Usuario.model';
import type { IFamiliarLogo } from '../types/familiar';
import { createFamiliar, deleteFamiliar, deleteImagenFamiliar, getFamiliares, updateFamiliar, updateImageFamiliar } from './familiar.service';

export default function apiQueryFamiliar() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ==============================

    const { mutate: createFamiliarMutation, isPending: isCreating } = useAppMutation<ApiResponse<IFamiliar>, Error, IFamiliar>({
        mutationFn: createFamiliar,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['familiares'] }); }
    });

    //=========== CONSULTAR ==========================

    const getFamiliarsQuery = (id: number, rol: string) => {
        return useAppQuery({
            queryKey: ['familiares', id, rol],
            queryFn: () => getFamiliares(id, rol),
        });
    };

    //=========== EDITAR ==============================

    const { mutate: actualizarFamiliarMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IFamiliar>({
        mutationFn: updateFamiliar,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['familiares'] }); }
    });

    //=========== ACTUALIZAR LOGO ==============================

    const { mutate: actualizarImagenMutation, isPending: isUpdatingImagen } = useAppMutation<ApiResponseVoid, Error, IFamiliarLogo>({
        mutationFn: ({ id, imagen }) => updateImageFamiliar(id, imagen),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['familiares'] })
    });

    //=========== ELIMINAR ==============================

    const { mutate: eliminarFamiliarMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteFamiliar,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['familiares'] }); }
    });

    //=========== ELIMINAR  IMAGEN =======================

    const { mutate: eliminarImagenFamiliarMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteImagenFamiliar,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['familiares'] }); }
    });

    return {
        isCreating,
        isUpdating,
        isUpdatingImagen,
        getFamiliarsQuery,
        createFamiliarMutation,
        actualizarFamiliarMutation,
        actualizarImagenMutation,
        eliminarFamiliarMutation,
        eliminarImagenFamiliarMutation
    }
}
