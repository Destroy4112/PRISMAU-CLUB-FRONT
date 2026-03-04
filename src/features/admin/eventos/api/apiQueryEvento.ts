import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { IEvento } from '@models/entities/Entity.model';
import type { ApiResponse, ApiResponseVoid } from '@models/response/Response.model';
import { createEvento, deleteEvento, getEventos, updateEvento } from './evento.service';

export default function apiQueryEvento() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ========================================

    const { mutate: createEventoMutation, isPending: isCreating } = useAppMutation<ApiResponse<IEvento>, Error, IEvento>({
        mutationFn: createEvento,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['eventos'] }); }
    });

    //=========== CONSULTAR ======================================

    const { data, isLoading } = useAppQuery<IEvento[], Error>({
        queryKey: ["eventos"],
        queryFn: getEventos
    });

    //=========== EDITAR =========================================

    const { mutate: actualizarEventoMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IEvento>({
        mutationFn: updateEvento,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['eventos'] }); }
    });

    //=========== ELIMINAR =======================================

    const { mutate: eliminarEventoMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteEvento,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['eventos'] }); }
    });

    return {
        eventos: data,
        isLoading,
        isCreating,
        isUpdating,
        createEventoMutation,
        actualizarEventoMutation,
        eliminarEventoMutation
    }
}
