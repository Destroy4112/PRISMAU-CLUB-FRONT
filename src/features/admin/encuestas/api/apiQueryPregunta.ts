import { useAppMutation, useAppQuery, useAppQueryClient } from "@hooks/useStore";
import type { IPregunta } from "@models/entities/Entity.model";
import type { ApiResponse, ApiResponseVoid } from "@models/response/Response.model";
import { createPregunta, deletePregunta, getPreguntas, updatePregunta } from "./pregunta.service";

export default function apiQueryPregunta(id: number) {

    const queryClient = useAppQueryClient();

    //=========== CREAR ==============================

    const { mutate: createPreguntaMutation, isPending: isCreating } = useAppMutation<ApiResponse<IPregunta>, Error, IPregunta>({
        mutationFn: createPregunta,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['preguntas'] }); }
    });

    //=========== CONSULTAR ==========================

    const { data: preguntas, isLoading } = useAppQuery<IPregunta[], Error>({
        queryKey: ['preguntas', id],
        queryFn: () => getPreguntas(id),
        enabled: !!id
    });

    //=========== EDITAR ==============================

    const { mutate: actualizarPreguntaMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IPregunta>({
        mutationFn: updatePregunta,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['preguntas'] }); }
    });

    //=========== ELIMINAR ==============================

    const { mutate: eliminarPreguntaMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deletePregunta,
        onSuccess: () => { queryClient.refetchQueries({ queryKey: ['preguntas'] }); }
    });

    return {
        preguntas,
        isLoading,
        isCreating,
        isUpdating,
        createPreguntaMutation,
        actualizarPreguntaMutation,
        eliminarPreguntaMutation
    }
}
