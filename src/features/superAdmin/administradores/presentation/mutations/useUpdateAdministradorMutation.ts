import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { administradorUseCases } from "../../application/administrador.container";
import type { AdministradorPayload } from "../../domain/payloads/administrador.payload";
import { administradorKeys } from "../queries/administrador.keys";

export const useUpdateAdministradorMutation = createApiMutation<ApiResponseVoid, AdministradorPayload>(
    (payload) => administradorUseCases.update(payload),
    {
        invalidateKeys: [administradorKeys.all],
        errorLabel: "Error al actualizar el administrador",
    }
);