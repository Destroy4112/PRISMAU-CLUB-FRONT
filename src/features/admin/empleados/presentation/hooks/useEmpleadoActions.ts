import useResetPasswordMutation from "@features/users/presentation/mutations/useResetPasswordMutation";
import { alertConfirm, alertError, alertSucces, alertWarning } from "@shared/utilities/alerts/alertas.utility";
import { useCallback } from "react";
import { useDeleteEmpleadoMutation } from "../mutations/useDeleteEmpleadoMutation";

export function useEmpleadoActions() {

    const { mutate: eliminarMutation } = useDeleteEmpleadoMutation();

    const handleDelete = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere eliminar este empleado?", "Si, eliminar!")) {
            eliminarMutation(id);
        }
    }, [eliminarMutation]);

    const { mutate: resetPasswordMutation } = useResetPasswordMutation();

    const handleResetPassword = useCallback(async (id: number): Promise<void> => {
        if (await alertConfirm("¿Seguro que quiere restablecer la contraseña de este empleado?", "Si, restablecer!")) {
            resetPasswordMutation(id, {
                onSuccess: (res) => {
                    if (res.status) {
                        alertSucces(res.message);
                    } else {
                        res.errors.forEach((error: string) => alertWarning(error));
                    }
                },
                onError: (error) => alertError(error.message)
            });
        }
    }, [resetPasswordMutation]);

    return {
        handleDelete,
        handleResetPassword,
    };
}