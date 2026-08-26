import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { administradorUseCases } from "../../application/container/administrador.container";
import type { AdministradorId } from "../../domain/models/administrador.model";
import { administradorKeys } from "../queries/administrador.keys";

export const useUpdateStatusAdministradorMutation = createApiMutation<ApiResponseVoid, AdministradorId>(
   (id) => administradorUseCases.updateStatus(id),
   {
      invalidateKeys: [administradorKeys.lists()],
      errorLabel: "Error al actualizar el status del administrador",
   }
);