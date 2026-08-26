import useResetPasswordMutation from "@features/users/presentation/mutations/useResetPasswordMutation";
import { alertConfirm, alertError, alertSucces, alertWarning } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";
import { useDeleteFamiliarMutation } from "../mutations/useDeleteFamiliarMutation";

export function useFamiliarActions() {

   const { mutate: eliminarMutation } = useDeleteFamiliarMutation();

   const handleDelete = useCallback(async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere eliminar este familiar?", "Si, eliminar!")) {
         eliminarMutation(id);
      }
   }, [eliminarMutation]);

   const { mutate: resetPasswordMutation } = useResetPasswordMutation();

   const handleResetPassword = useCallback(async (id: number): Promise<void> => {
      if (await alertConfirm("¿Seguro que quiere restablecer la contraseña de este familiar?", "Si, restablecer!")) {
         resetPasswordMutation(id, {
            onSuccess: (res) => {
               if (res.status) {
                  alertSucces(res.message);
               } else {
                  res.errors?.forEach((error: string) => alertWarning(error));
               }
            },
            onError: (error) => alertError(error.message)
         });
      }
   }, [resetPasswordMutation]);

   return {
      handleDelete,
      handleResetPassword
   };
}