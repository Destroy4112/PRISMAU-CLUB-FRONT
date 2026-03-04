import { useAppMutation, useAppQuery, useAppQueryClient } from '@hooks/useStore';
import type { ApiResponse, ApiResponseVoid, PaginatedResponse } from '@models/response/Response.model';
import type { IEmpleado } from '@models/usuario/Usuario.model';
import type { EmpleadoImagen, FiltersEmpleado } from '../types/empleado';
import { changeImagenEmpleado, createEmpleado, deleteEmpleado, deleteImagenEmpleado, getEmpleados, updateEmpleado } from './empleado.service';

export default function apiQueryEmpleado() {

    const queryClient = useAppQueryClient();

    //=========== CREAR ==============================

    const { mutate: createEmpleadoMutation, isPending: isCreating } = useAppMutation<ApiResponse<IEmpleado>, Error, IEmpleado>({
        mutationFn: createEmpleado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    //=========== CONSULTAR ==========================

    const getEmpleadosQuery = (page: number, limit: number, filters: FiltersEmpleado = {}) => {
        return useAppQuery<PaginatedResponse<IEmpleado>, Error>({
            queryKey: ['empleados', page, limit, JSON.stringify(filters)],
            queryFn: () => getEmpleados(page, limit, filters),
            refetchOnWindowFocus: false,
        });
    };

    //=========== EDITAR ==============================

    const { mutate: actualizarEmpleadoMutation, isPending: isUpdating } = useAppMutation<ApiResponseVoid, Error, IEmpleado>({
        mutationFn: updateEmpleado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    //=========== ACTUALIZAR IMAGEN =====================

    const { mutate: actualizarImagenMutation, isPending: isUpdatingImagen } = useAppMutation<ApiResponseVoid, Error, EmpleadoImagen>({
        mutationFn: ({ id, imagen }) => changeImagenEmpleado(id, imagen),
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    //=========== ELIMINAR ==============================

    const { mutate: eliminarEmpleadoMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteEmpleado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    //=========== ELIMINAR  IMAGEN =======================

    const { mutate: eliminarImagenEmpleadoMutation } = useAppMutation<ApiResponseVoid, Error, number>({
        mutationFn: deleteImagenEmpleado,
        onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['empleados'] }); }
    });

    return {
        isCreating,
        isUpdating,
        isUpdatingImagen,
        getEmpleadosQuery,
        createEmpleadoMutation,
        actualizarEmpleadoMutation,
        actualizarImagenMutation,
        eliminarEmpleadoMutation,
        eliminarImagenEmpleadoMutation
    }
}
