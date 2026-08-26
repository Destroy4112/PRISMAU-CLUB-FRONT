import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { familiarUseCases } from "../../application/container/familiar.container";
import type { FamiliarImagenInput } from "../../application/contracts/familiar.input";
import { familiarKeys } from "../queries/familiar.keys";

export const useUpdateImagenFamiliarMutation = createApiMutation<ApiResponseVoid, FamiliarImagenInput>(
   (payload) => familiarUseCases.updateImagen(payload),
   {
      invalidateKeys: [familiarKeys.lists()],
      errorLabel: "Error al actualizar la imagen del familiar",
   }
);