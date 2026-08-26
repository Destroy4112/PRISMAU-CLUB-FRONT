import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { asociadoUseCases } from "../../application/container/asociado.container";
import type { UpdateAsociadoInput } from "../../application/contracts/asociado.input";
import { asociadoKeys } from "../queries/asociado.keys";

export const useUpdateAsociadoMutation = createApiMutation<ApiResponseVoid, UpdateAsociadoInput>(
   (payload) => asociadoUseCases.update(payload),
   {
      invalidateKeys: [asociadoKeys.lists()],
      errorLabel: "Error al actualizar el asociado",
   }
);