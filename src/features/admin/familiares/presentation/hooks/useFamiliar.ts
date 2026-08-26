import useModals from "@shared/hooks/useModal";
import type { SocioDetail } from "@shared/models/usuario-detail.model";
import type { FamiliarModalKey } from "../types/familiar";
import { useFamiliarActions } from "./useFamiliarActions";
import { useFamiliarForm } from "./useFamiliarForm";
import useFamiliarImagen from "./useFamiliarImagen";
import { useFamiliarList } from "./useFamiliarList";

function useFamiliar(socio: SocioDetail, type: 'Asociado' | 'Adherente') {

   const modalAPi = useModals<FamiliarModalKey>();

   const list = useFamiliarList(socio.id, type);
   const form = useFamiliarForm(modalAPi, type, socio);
   const actions = useFamiliarActions();
   const imagen = useFamiliarImagen(modalAPi);

   return {
      titulo: type === 'Asociado' ? 'Familiares' : 'Familiares',
      subtitulo: `Grupo familiar del ${type === 'Asociado' ? 'asociado' : 'adherente'} ${socio.Nombre} ${socio.Apellidos}`,
      modals: modalAPi.modals,
      ...list,
      ...form,
      ...actions,
      ...imagen

   };
}

export default useFamiliar;