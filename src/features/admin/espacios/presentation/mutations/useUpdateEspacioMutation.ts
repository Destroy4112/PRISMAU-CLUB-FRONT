import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { espacioUseCases } from "../../application/container/espacio.container";
import type { UpdateEspacioInput } from "../../application/contracts/espacio.input";
import { espacioKeys } from "../queries/espacio.keys";

export const useUpdateEspacioMutation = createApiMutation<ApiResponseVoid, UpdateEspacioInput>(
   (payload) => espacioUseCases.update(payload),
   {
      invalidateKeys: [espacioKeys.lists()],
      errorLabel: "Error al actualizar el espacio",
   }
);