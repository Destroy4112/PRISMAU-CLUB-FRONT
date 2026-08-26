import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { optionUseCases } from "../../application/container/option.container";
import type { OptionInput } from "../../application/contracts/option.input";
import { optionKeys } from "../queries/option.keys";

export const useUpdateOptionMutation = createApiMutation<ApiResponseVoid, OptionInput>(
   (payload) => optionUseCases.update(payload),
   {
      invalidateKeys: [optionKeys.all()],
      errorLabel: "Error al actualizar la option",
   }
);