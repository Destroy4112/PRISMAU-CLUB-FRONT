import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useDeleteOptionMutation } from "../mutations/useDeleteOptionMutation";

export function useOptionActions() {

    const { mutate: eliminarOptionMutation } = useDeleteOptionMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar esta respuesta?", "Si, eliminar!")) {
            eliminarOptionMutation(id);
        }
    };

    return {
        handleDelete,
    };
}