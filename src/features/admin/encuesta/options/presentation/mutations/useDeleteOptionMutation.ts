import { createApiMutation } from "@core/store/react-query/createApiMutation";
import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { optionUseCases } from "../../application/container/option.container";
import type { OptionId } from "../../domain/model/option.model";
import { optionKeys } from "../queries/option.keys";

export const useDeleteOptionMutation = createApiMutation<ApiResponseVoid, OptionId>(
   (id) => optionUseCases.delete(id),
   {
      invalidateKeys: [optionKeys.all()],
      errorLabel: "Error al eliminar la option",
   }
);