import type { ApiResponse } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { administradorUseCases } from "../../application/administrador.container";
import type { Administrador, AdministradorPayload } from "../../domain/administrador.model";
import { administradorKeys } from "../queries/administrador.keys";

export const useCreateAdministradorMutation = createApiMutation<ApiResponse<Administrador>, AdministradorPayload>(
    (payload) => administradorUseCases.create(payload),
    {
        invalidateKeys: [administradorKeys.all],
        errorLabel: "Error al crear el administrador",
    }
);