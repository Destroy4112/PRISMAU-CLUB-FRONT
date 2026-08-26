import { useAppLocation } from "@app/routes/hooks";
import useModals from "@shared/hooks/useModal";
import type { PreguntaModalKey } from "../types/pregunta";
import { usePreguntaActions } from "./usePreguntaActions";
import { usePreguntaForm } from "./usePreguntaForm";
import { usePreguntaList } from "./usePreguntaList";

export default function usePregunta() {

   const encuesta = useAppLocation().state?.encuesta;

   const modalApi = useModals<PreguntaModalKey>();

   const list = usePreguntaList(encuesta.id);
   const form = usePreguntaForm(encuesta.id, modalApi);
   const actions = usePreguntaActions();

   return {
      titulo: 'Preguntas',
      subtitulo: 'Listado de preguntas de la encuesta',
      modals: modalApi.modals.crearEditar,
      encuesta,
      ...actions,
      ...list,
      ...form
   }
}