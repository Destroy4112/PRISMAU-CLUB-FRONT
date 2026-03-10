import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useDeleteEncuestaMutation } from "../mutations/useDeleteEncuestaMutation";

export function useEncuestaActions() {
    
    const { mutate: eliminarEncuestaMutation } = useDeleteEncuestaMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar esta encuesta?", "Si, eliminar!")) {
            eliminarEncuestaMutation(id);
        }
    };

    return {
        handleDelete,
    };
}