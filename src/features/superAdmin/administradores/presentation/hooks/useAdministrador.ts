import useModals from "@shared/hooks/useModal";
import type { AdminModalKey } from "../types/admin";
import { useAdministradorActions } from "./useAdministradorActions";
import { useAdministradorForm } from "./useAdministradorForm";
import { useAdministradorList } from "./useAdministradorList";
import { useAdministradorPassword } from "./useAdministradorPassword";

export default function useAdministrador() {

   const modal = useModals<AdminModalKey>();

   const list = useAdministradorList();
   const form = useAdministradorForm(modal);
   const actions = useAdministradorActions();
   const password = useAdministradorPassword(modal);

   return {
      titulo: "Administradores",
      subtitulo: "Gestión de usuarios con privilegios administrativos",
      campos: "nombre completo, documento, correo, usuario",
      modals: modal.modals,
      ...list,
      ...form,
      ...actions,
      ...password
   };
}