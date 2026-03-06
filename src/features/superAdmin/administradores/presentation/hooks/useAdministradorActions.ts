import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";
import { useDeleteAdministradorMutation } from "../mutations/useDeleteAdministradorMutation";
import { useUpdateStatusAdministradorMutation } from "../mutations/useUpdateStatusAdministradorMutation";

export function useAdministradorActions() {

    const { mutate: cambiarEstadoMutation } = useUpdateStatusAdministradorMutation();
    const { mutate: eliminarAdminMutation } = useDeleteAdministradorMutation();

    const handleUpdateStatus = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere cambiar el estado de este admin?", "Si, cambiar!")) {
            cambiarEstadoMutation(id);
        }
    }, [cambiarEstadoMutation]);

    const handleDelete = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este admin?", "Si, eliminar!")) {
            eliminarAdminMutation(id);
        }
    }, [eliminarAdminMutation]);

    return {
        handleDelete,
        handleUpdateStatus,
    };
}