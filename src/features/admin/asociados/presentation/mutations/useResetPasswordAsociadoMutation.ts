import { userPasswordUseCases } from "@features/users/application/container/user.container";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { asociadoKeys } from "../queries/asociado.keys";

export const useResetPasswordAsociadoMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => userPasswordUseCases.resetPassword(id),
    {
        invalidateKeys: [asociadoKeys.all],
        errorLabel: "Error al restablecer la contraseña del asociado",
    }
);