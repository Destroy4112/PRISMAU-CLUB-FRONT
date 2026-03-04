import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { ApiResponse, ApiResponseVoid } from '@models/response/Response.model';
import type { IAdherente } from "@models/usuario/Usuario.model";
import type { AdherenteEstado, AdherenteImagen, FiltersAdherente } from '../types/adherente';
import {
    changeAdherenteToAsociado, changeImagenAdherente, changeStatusAdherente, createAdherente, deleteAdherente,
    deleteImagenAdherente, getAdherentes, updateAdherente
} from './adherente.service';

export default function apiQueryAdherente() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ==============================

    const { mutate: createAdherenteMutation, isPending: isCreating } = useAppMutation<ApiResponse<IAdherente>, Error, IAdherente>({
        mutationFn: createAdherente,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['adherentes'] }); }
    });

    //=========== CONSULTAR ==========================

    const getAdherentesQuery = (page: number, limit: number, filters: FiltersAdherente = {}) => {
        return useAppQuery({
            queryKey: ['adherentes', page, limit, JSON.stringify(filters)],
            queryFn: () => getAdherentes(page, limit, filters),
            refetchOnWindowFocus: false,
        });
    };

    //=========== EDITAR ==============================

    const { mutate: actualizarAdherenteMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IAdherente>({
        mutationFn: updateAdherente,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['adherentes'] }); }
    });

    //=========== CAMBIAR A ASOCIADO ==================

    const { mutate: changeToAsociadoMutation, isPending: isChanging } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: changeAdherenteToAsociado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['adherentes'] }); }
    });

    //=========== INACTIVAR ============================

    const { mutate: cambiarEstadoMutation, isPending: isUpdatingStatus } = useAppMutation<ApiResponseVoid, Error, AdherenteEstado>({
        mutationFn: changeStatusAdherente,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['adherentes'] }); }
    });

    //=========== ACTUALIZAR IMAGEN =====================

    const { mutate: actualizarImagenMutation, isPending: isUpdatingImagen } = useAppMutation<ApiResponseVoid, Error, AdherenteImagen>({
        mutationFn: ({ id, imagen }) => changeImagenAdherente(id, imagen),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['adherentes'] }); }
    });

    //=========== ELIMINAR ==============================

    const { mutate: eliminarAdherenteMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteAdherente,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['adherentes'] }); }
    });

    //=========== ELIMINAR  IMAGEN =======================

    const { mutate: eliminarImagenAdherenteMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteImagenAdherente,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['adherentes'] }); }
    });

    return {
        isCreating,
        isUpdating,
        isChanging,
        isUpdatingStatus,
        isUpdatingImagen,
        getAdherentesQuery,
        createAdherenteMutation,
        actualizarAdherenteMutation,
        changeToAsociadoMutation,
        cambiarEstadoMutation,
        actualizarImagenMutation,
        eliminarAdherenteMutation,
        eliminarImagenAdherenteMutation
    }
}
