import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";
import { useDeleteEspacioMutation } from "../mutations/useDeleteEspacioMutation";

export function useEspacioActions() {

   const { mutate: eliminarMutation } = useDeleteEspacioMutation();

   const handleDelete = useCallback(async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere eliminar este espacio?", "Si, eliminar!")) {
         eliminarMutation(id);
      }
   }, [eliminarMutation]);

   return {
      handleDelete,
   };
}