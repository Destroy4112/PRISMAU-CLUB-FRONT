import { createApiMutation } from "@shared/react-query/createApiMutation";
import { administradorUseCases } from "../../application/administrador.container";
import type { AdministradorId } from "../../domain/models/administrador.model";
import { administradorKeys } from "../queries/administrador.keys";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";

export const useDeleteAdministradorMutation = createApiMutation<ApiResponseVoid, AdministradorId>(
    (id) => administradorUseCases.delete(id),
    {
        invalidateKeys: [administradorKeys.all],
        errorLabel: "Error al eliminar el administrador",
    }
);