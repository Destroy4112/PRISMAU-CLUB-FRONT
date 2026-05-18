import type { ApiResponseVoid } from "@shared/constants/response/Response.model";
import { createApiMutation } from "@shared/react-query/createApiMutation";
import { optionUseCases } from "../../application/container/option.container";
import type { OptionInput } from "../../application/contracts/option.input";
import { optionKeys } from "../queries/option.keys";

export const useCreateOptionMutation = createApiMutation<ApiResponseVoid, OptionInput>(
    (payload) => optionUseCases.create(payload),
    {
        invalidateKeys: [optionKeys.all()],
        errorLabel: "Error al crear la option",
    }
);