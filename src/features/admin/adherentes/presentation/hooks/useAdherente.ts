import useModals from "@shared/hooks/useModal";
import type { AdherenteModalKey } from "../types/adherente";
import { useAdherenteActions } from "./useAdherenteActions";
import { useAdherenteAsociadoList } from "./useAdherenteAsociadoList";
import { useAdherenteForm } from "./useAdherenteForm";
import useAdherenteImagen from "./useAdherenteImagen";
import { useAdherenteList } from "./useAdherenteList";

function useAdherente() {

   const modalApi = useModals<AdherenteModalKey>();

   const list = useAdherenteList();
   const form = useAdherenteForm(modalApi);
   const action = useAdherenteActions(modalApi);
   const imagen = useAdherenteImagen(modalApi);
   const asociado = useAdherenteAsociadoList();

   return {
      titulo: "Adherentes",
      subtitulo: "Gestión de miembros adherentes del club",
      modals: modalApi.modals,
      ...list,
      ...form,
      ...action,
      ...imagen,
      ...asociado
   };
}

export default useAdherente;
