import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { familiarUseCases } from "../../application/container/familiar.container";
import type { CreateFamiliarInput } from "../../application/contracts/familiar.input";
import { familiarKeys } from "../queries/familiar.keys";

export const useCreateFamiliarMutation = createApiMutation<ApiResponseVoid, CreateFamiliarInput>(
   (payload) => familiarUseCases.create(payload),
   {
      invalidateKeys: [familiarKeys.lists()],
      errorLabel: "Error al crear el familiar",
   }
);