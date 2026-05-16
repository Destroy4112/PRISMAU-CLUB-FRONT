import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { administradorUseCases } from "../../application/container/administrador.container";
import type { AdministradorId } from "../../domain/models/administrador.model";
import { administradorKeys } from "../queries/administrador.keys";

export const useDeleteAdministradorMutation = createApiMutation<ApiResponseVoid, AdministradorId>(
    (id) => administradorUseCases.delete(id),
    {
        invalidateKeys: [administradorKeys.lists()],
        errorLabel: "Error al eliminar el administrador",
    }
);