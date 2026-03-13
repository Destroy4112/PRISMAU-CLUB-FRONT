import { userUseCases } from "@features/users/application/user.container";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { familiarKeys } from "../queries/familiar.keys";

export const useResetPasswordFamiliarMutation = createApiMutation<ApiResponseVoid, number>(
    (id) => userUseCases.resetPassword(id),
    {
        invalidateKeys: [familiarKeys.all],
        errorLabel: "Error al restablecer la contraseña del familiar",
    }
);