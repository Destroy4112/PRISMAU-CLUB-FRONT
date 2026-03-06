import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useDeleteMenuMutation } from "../mutations/useDeleteMenuMutation";

export function useMenuActions() {
    
    const { mutate: eliminarMenuMutation } = useDeleteMenuMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este menu?", "Si, eliminar!")) {
            eliminarMenuMutation(id);
        }
    };

    return {
        handleDelete,
    };
}