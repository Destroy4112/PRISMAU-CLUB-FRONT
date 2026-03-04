import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { IEncuesta } from '@models/entities/Entity.model';
import { type ApiResponse, type ApiResponseVoid } from '@models/response/Response.model';
import { createEncuesta, deleteEncuesta, getEncuestas, updateEncuesta } from './encuesta.service';

export default function apiQueryEncuesta() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ========================================

    const { mutate: createEncuestaMutation, isPending: isCreating } = useAppMutation<ApiResponse<IEncuesta>, Error, IEncuesta>({
        mutationFn: createEncuesta,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['encuestas'] }); }
    });

    //=========== CONSULTAR ======================================

    const { data, isLoading } = useAppQuery<IEncuesta[], Error>({
        queryKey: ["encuestas"],
        queryFn: getEncuestas
    });

    //=========== EDITAR =========================================

    const { mutate: actualizarEncuestaMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IEncuesta>({
        mutationFn: updateEncuesta,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['encuestas'] }); }
    });

    //=========== ELIMINAR =======================================

    const { mutate: eliminarEncuestaMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteEncuesta,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['encuestas'] }); }
    });

    return {
        data,
        isLoading,
        isCreating,
        isUpdating,
        createEncuestaMutation,
        actualizarEncuestaMutation,
        eliminarEncuestaMutation
    }
}
