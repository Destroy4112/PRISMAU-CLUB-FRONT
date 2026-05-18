import { useAppNavigate } from "@app/routes/hooks";
import { PRIVATE_ROUTES } from "@shared/constants/rutas/Rutas.model";
import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import type { Pregunta } from "../../domain/model/pregunta.model";
import { useDeletePreguntaMutation } from "../mutations/useDeletePreguntaMutation";

export function usePreguntaActions() {

    const navigate = useAppNavigate();

    const { mutate: eliminarPreguntaMutation } = useDeletePreguntaMutation();

    const handleDelete = async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar esta pregunta?", "Si, eliminar!")) {
            eliminarPreguntaMutation(id);
        }
    };

    const goRespuestas = (pregunta: Pregunta) => {
        navigate(PRIVATE_ROUTES.RESPUESTAS, { state: { pregunta }, replace: true });
    };

    return {
        handleDelete,
        goRespuestas
    };
}