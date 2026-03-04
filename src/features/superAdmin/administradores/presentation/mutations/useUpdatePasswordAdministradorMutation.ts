import { userUseCases } from "@features/users/application/user.container";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import type { AdministradorPasswordPayload } from "../../domain/administrador.model";
import { administradorKeys } from "../queries/administrador.keys";

export const useUpdatePasswordAdministradorMutation = createApiMutation<ApiResponseVoid, AdministradorPasswordPayload>(
    (payload) => userUseCases.updatePassword(payload),
    {
        invalidateKeys: [administradorKeys.all],
        errorLabel: "Error al actualizar la contraseña del administrador",
    }
);