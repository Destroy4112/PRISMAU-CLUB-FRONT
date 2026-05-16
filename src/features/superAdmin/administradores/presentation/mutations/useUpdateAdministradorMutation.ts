import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { administradorUseCases } from "../../application/container/administrador.container";
import type { AdministradorInput } from "../../application/contracts/administrador.input";
import { administradorKeys } from "../queries/administrador.keys";

export const useUpdateAdministradorMutation = createApiMutation<ApiResponseVoid, AdministradorInput>(
    (payload) => administradorUseCases.update(payload),
    {
        invalidateKeys: [administradorKeys.lists()],
        errorLabel: "Error al actualizar el administrador",
    }
);