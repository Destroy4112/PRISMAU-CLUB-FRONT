import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { espacioUseCases } from "../../application/container/espacio.container";
import type { CreateEspacioInput } from "../../application/contracts/espacio.input";
import { espacioKeys } from "../queries/espacio.keys";

export const useCreateEspacioMutation = createApiMutation<ApiResponseVoid, CreateEspacioInput>(
   (payload) => espacioUseCases.create(payload),
   {
      invalidateKeys: [espacioKeys.lists()],
      errorLabel: "Error al crear el espacio",
   }
);