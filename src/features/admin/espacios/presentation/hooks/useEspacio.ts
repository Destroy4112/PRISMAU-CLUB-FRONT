import useModals from "@shared/hooks/useModal";
import type { EspacioModalKey } from "../types/espacio";
import { useDisponibilidad } from "./useDisponibilidad";
import { useEspacioActions } from "./useEspacioActions";
import { useEspacioForm } from "./useEspacioForm";
import { useEspacioList } from "./useEspacioList";

function useEspacio() {

   const modalApi = useModals<EspacioModalKey>();

   const list = useEspacioList();
   const form = useEspacioForm(modalApi);
   const action = useEspacioActions();
   const disponibilidad = useDisponibilidad();

   return {
      titulo: "Espacios",
      subtitulo: "Gestión de espacios del club",
      campos: "nombre, apellido, documento, cargo...",
      modals: modalApi.modals,
      ...list,
      ...form,
      ...action,
      ...disponibilidad
   };
}

export default useEspacio;
