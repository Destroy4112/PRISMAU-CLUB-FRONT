import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { espacioUseCases } from "../../application/container/espacio.container";
import { espacioKeys } from "../queries/espacio.keys";

export const useDeleteEspacioMutation = createApiMutation<ApiResponseVoid, number>(
   (id) => espacioUseCases.delete(id),
   {
      invalidateKeys: [espacioKeys.lists()],
      errorLabel: "Error al eliminar el espacio",
   }
);