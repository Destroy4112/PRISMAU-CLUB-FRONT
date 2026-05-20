import { useAppLocation } from "@app/routes/hooks";
import type { Encuesta } from "@features/admin/encuesta/encuestas/domain/model/encuesta.model";
import useModals from "@shared/hooks/useModal";
import type { RespuestaEncuestaModalKey } from "../types/respuesta-encuesta";
import useRespuestaEncuestaForm from "./useRespuestaEncuestaForm";
import { useRespuestaEncuestaList } from "./useRespuestaEncuestaList";

export default function useRespuestaEncuesta() {

    const encuesta: Encuesta = useAppLocation().state?.encuesta;

    const modalApi = useModals<RespuestaEncuestaModalKey>();

    const list = useRespuestaEncuestaList(encuesta.id);
    const form = useRespuestaEncuestaForm(modalApi); 

    return {
        titulo: 'Respuestas de la encuesta',
        subtitulo: 'Listado de usuarios que respondieron la encuesta',
        modals: modalApi.modals.detalle,
        encuesta,
        ...list,
        ...form
    }
}