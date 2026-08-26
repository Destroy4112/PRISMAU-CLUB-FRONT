import { useAppLocation } from "@app/routes/hooks";
import type { Pregunta } from "@features/admin/encuesta/preguntas/domain/model/pregunta.model";
import useModals from "@shared/hooks/useModal";
import type { OptionModalKey } from "../types/option";
import { useOptionActions } from "./useOptionActions";
import { useOptionForm } from "./useOptionForm";
import { useOptionList } from "./useOptionList";

export default function useOption() {

   const pregunta: Pregunta = useAppLocation().state?.pregunta;

   const modalApi = useModals<OptionModalKey>();

   const list = useOptionList(pregunta.id);
   const form = useOptionForm(pregunta.id, modalApi);
   const actions = useOptionActions();

   return {
      titulo: 'Opciones',
      subtitulo: 'Listado de opciones de la pregunta',
      modals: modalApi.modals.crearEditar,
      pregunta,
      ...actions,
      ...list,
      ...form
   }
}