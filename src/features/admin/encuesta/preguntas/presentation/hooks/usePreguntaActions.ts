import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useDeletePreguntaMutation } from "../mutations/useDeletePreguntaMutation";

export function usePreguntaActions() {

    const { mutate: eliminarPreguntaMutation } = useDeletePreguntaMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar esta pregunta?", "Si, eliminar!")) {
            eliminarPreguntaMutation(id);
        }
    };

    return {
        handleDelete,
    };
}