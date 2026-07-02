import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";
import { useDeleteRubroMutation } from "../mutations/useDeleteRubroMutation";

export function useRubroActions() {

    const { mutate: eliminarMutation } = useDeleteRubroMutation();

    const handleDelete = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este rubro?", "Si, eliminar!")) {
            eliminarMutation(id);
        }
    }, [eliminarMutation]);

    return {
        handleDelete,
    };
}