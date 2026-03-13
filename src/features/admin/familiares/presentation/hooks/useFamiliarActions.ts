import { alertConfirm } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";
import { useDeleteFamiliarMutation } from "../mutations/useDeleteFamiliarMutation";
import { useResetPasswordFamiliarMutation } from "../mutations/useResetPasswordFamiliarMutation";

export function useFamiliarActions() {

    const { mutate: eliminarMutation } = useDeleteFamiliarMutation();

    const handleDelete = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este familiar?", "Si, eliminar!")) {
            eliminarMutation(id);
        }
    }, [eliminarMutation]);

    const { mutate: resetPasswordMutation } = useResetPasswordFamiliarMutation();

    const handleResetPassword = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere restablecer la contraseña de este familiar?", "Si, restablecer!")) {
            resetPasswordMutation(id);
        }
    }, [resetPasswordMutation]);

    return {
        handleDelete,
        handleResetPassword
    };
}