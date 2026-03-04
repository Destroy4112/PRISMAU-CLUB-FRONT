import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { ApiResponse, ApiResponseVoid } from '@models/response/Response.model';
import type { IAsociado } from '@models/usuario/Usuario.model';
import type { AsociadoEstado, AsociadoImagen, FiltersAsociado } from '../types/asociado';
import {
    changeImagenAsociado, changeStatusAsociado, createAsociado, deleteAsociado, deleteImagenAsociado,
    getAllAsociados,
    getAsociados, updateAsociado
} from './asociado.service';

export default function apiQueryAsociado() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ==============================

    const { mutate: createAsociadoMutation, isPending: isCreating } = useAppMutation<ApiResponse<IAsociado>, Error, IAsociado>({
        mutationFn: createAsociado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['asociados'] }); }
    });

    //=========== CONSULTAR ==========================

    const getAsociadosQuery = (page: number, limit: number, filters: FiltersAsociado = {}) => {
        return useAppQuery({
            queryKey: ['asociados', page, limit, JSON.stringify(filters)],
            queryFn: () => getAsociados(page, limit, filters),
            refetchOnWindowFocus: false,
        });
    };

    const { data: asociados, isLoading } = useAppQuery<IAsociado[], Error>({
        queryKey: ['asociados_all'], queryFn: getAllAsociados, refetchOnWindowFocus: false
    });

    //=========== EDITAR ==============================

    const { mutate: actualizarAsociadoMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IAsociado>({
        mutationFn: updateAsociado, onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['asociados'] }); }
    });

    //=========== INACTIVAR ============================

    const { mutate: cambiarEstadoMutation, isPending: isUpdatingStatus } = useAppMutation<ApiResponseVoid, Error, AsociadoEstado>({
        mutationFn: changeStatusAsociado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['asociados'] }); }
    });

    //=========== ACTUALIZAR IMAGEN =====================

    const { mutate: actualizarImagenMutation, isPending: isUpdatingImagen } = useAppMutation<ApiResponseVoid, Error, AsociadoImagen>({
        mutationFn: ({ id, imagen }) => changeImagenAsociado(id, imagen),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['asociados'] }); }
    });

    //=========== ELIMINAR ==============================

    const { mutate: eliminarAsociadoMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteAsociado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['asociados'] }); }
    });

    //=========== ELIMINAR  IMAGEN =======================

    const { mutate: eliminarImagenAsociadoMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteImagenAsociado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['asociados'] }); }
    });

    return {
        asociados,
        isLoading,
        isCreating,
        isUpdating,
        isUpdatingStatus,
        isUpdatingImagen,
        getAsociadosQuery,
        createAsociadoMutation,
        actualizarAsociadoMutation,
        cambiarEstadoMutation,
        actualizarImagenMutation,
        eliminarAsociadoMutation,
        eliminarImagenAsociadoMutation
    }
}
