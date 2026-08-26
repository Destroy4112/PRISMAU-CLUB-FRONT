import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";
import { useDeleteEventoMutation } from "../mutations/useDeleteEventoMutation";

export function useEventoActions() {

   const { mutate: eliminarMutation } = useDeleteEventoMutation();

   const handleDelete = useCallback(async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere eliminar este evento?", "Si, eliminar!")) {
         eliminarMutation(id);
      }
   }, [eliminarMutation]);

   return {
      handleDelete,
   };
}