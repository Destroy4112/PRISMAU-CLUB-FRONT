import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useDeleteMenuRolMutation } from "../mutations/useDeleteMenuRolMutation";

export function useMenuRolActions() {
    
    const { mutate: eliminarMenuMutation } = useDeleteMenuRolMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este menu de rol?", "Si, eliminar!")) {
            eliminarMenuMutation(id);
        }
    };

    return { handleDelete };
}